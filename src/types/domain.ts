type AccessRange = {
  [key in '전체 공개' | '친구 공개' | '나만 보기']: string;
}

interface Feed {
  id: number,
  imageUri: string,
}
