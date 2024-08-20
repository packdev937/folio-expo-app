function isBlank(value: string) {
  return value.trim() === '';
}

type UserInfomation = {
  id: string;
  nickname: string;
};

function validateUser(values: UserInfomation) {
  const errors = {
    id: '',
    nickname: '',
  };

  if (!/^[a-zA-Z0-9_]{2,10}$/.test(values.id)) {
    errors.id = '아이디는 영문자, 숫자, 언더바만 사용할 수 있으며, 2자 이상 10자 이내여야 합니다.';
  }

  if (!(values.nickname.length >= 2 && values.nickname.length <= 10)) {
    errors.nickname = '닉네임은 2~10자 사이로 입력해주세요.';
  }

  return errors;
}

function validateSignup(values: UserInfomation) {
  return validateUser(values);
}


function validateAddPost(values: { title: string }) {
  const errors = {
    title: '',
    description: '',
  };

  if (isBlank(values.title)) {
    errors.title = `제목은 1~30자 이내로 입력해주세요.`;
  }

  return errors;
}

function validateEditProfile(values: { nickname: string }) {
  const errors = {
    nickname: '',
  };

  if (isBlank(values.nickname)) {
    errors.nickname = '닉네임을 입력해주세요.';
  }

  return errors;
}

export {
  validateSignup,
  validateAddPost,
  validateEditProfile,
};
