import React, {useRef, useState} from 'react'
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import InputField from "@/components/common/InputField";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import useForm from "@/hooks/useForm";
import {validateSignup} from "@/utils";
import CustomButton from "@/components/common/CustomButton";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {Checkbox} from "expo-checkbox";
import {authNavigations, colors} from "@/constants";

function SignupScreen({navigation}) {
  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState({
    age: false,
    privacy: false,
    service: false,
  });
  const nicknameRef = useRef<TextInput | null>(null);

  const handleToggleAll = () => {
    const reversedValue = !allAgreed;
    setAllAgreed(reversedValue);
    setTermsAgreed({
      age: reversedValue,
      privacy: reversedValue,
      service: reversedValue,
    });
  };

  const handleToggleTerm = (key: string) => {
    setTermsAgreed((prev) => {
      const updated = {...prev, [key]: !prev[key]};
      setAllAgreed(Object.values(updated).every(Boolean)); // 모든 항목이 true인지 확인
      return updated;
    });
  };

  const login = useForm({
    initialValue: {
      id: '',
      nickname: '',
    },
    validate: validateSignup
  })

  const datePicker = useForm({
    initialValue: {
      date: new Date()
    },
  })

  const {
    value: dateValue,
    showPicker,
    onPressIn: handleToggleDatePicker,
    onChange: handleChangeDate,
    onChangeText: handleChangeDateText,
  } = datePicker.getDatePickerProps('date');

  const bottomSheetModalRef = useRef(null)

  const snapPoints = ["50%"]

  function handlePresentModal() {
    bottomSheetModalRef.current?.present()
  }

  function handleDismissModal() {
    bottomSheetModalRef.current?.dismiss()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>회원 가입에 필요한 {"\n"}정보를 입력해주세요</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          caption={'아이디'}
          placeholder={'teamfolio'}
          error={login.errors.id}
          touched={login.touched.id}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => nicknameRef.current?.focus()}
          {...login.getTextInputProps('id')}
        />
        <InputField
          ref = {nicknameRef}
          caption={'닉네임'}
          placeholder={'홍길동'}
          error={login.errors.nickname}
          touched={login.touched.nickname}
          returnKeyType="next"
          {...login.getTextInputProps('nickname')}
        />
        {showPicker && (<RNDateTimePicker
            style={styles.datePicker}
            mode='date'
            display='spinner'
            locale='ko-KR'
            onChange={handleChangeDate}
            value={datePicker.values.date}
          />
        )}

        {!showPicker && (
          <InputField
            editable={false}
            caption={'생년월일'}
            placeholder={'1999년 3월 27일'}
            value={dateValue}
            onPressIn={handleToggleDatePicker}
            onChangeText={handleChangeDateText}
          />
        )}
        {/*todo: submit button*/}
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        // backgroundStyle={{ borderRadius : 50 }}
      >
        <View style={styles.termContainer}>
          <View style={styles.termInfo}>
            <Text style={styles.termInfoHeaderText}>서비스 이용 약관에 대한 동의가 필요합니다.</Text>
            <Text style={styles.termInfoText}>해당 항목에 동의하지 않으실 경우, {`\n`}서비스 이용에 제한이 있을 수
              있습니다.</Text>
          </View>
          <View style={styles.termItemContainer}>
            <View style={styles.termItem}>
              <Checkbox value={allAgreed} onValueChange={handleToggleAll}/>
              <Text style={styles.termText}>전체 동의하기</Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.termItem}>
              <Checkbox value={termsAgreed.age} onValueChange={() => handleToggleTerm('age')}/>
              <Text style={styles.termText}>(필수) 만 14세 이상입니다.</Text>
            </View>

            <View style={styles.termItem}>
              <Checkbox value={termsAgreed.privacy} onValueChange={() => handleToggleTerm('privacy')}/>
              <Text style={styles.termText}>(필수) 개인정보 처리방침 동의</Text>
              <View style={styles.termItemDetail}>

                <Pressable onPress={() => {
                  navigation.navigate(authNavigations.TERM)
                  handleDismissModal()
                }}>
                  <Text style={styles.termItemDetailText}> 더보기 </Text>
                </Pressable>

              </View>
            </View>

            <View style={styles.termItem}>
              <Checkbox value={termsAgreed.service} onValueChange={() => handleToggleTerm('service')}/>
              <Text style={styles.termText}>(필수) 서비스 이용약관 동의</Text>
              <View style={styles.termItemDetail}>
                <Text style={styles.termItemDetailText}> 더보기 </Text>
              </View>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <CustomButton
              label={'확인'}
              onPress={handleDismissModal}/>
          </View>
        </View>
      </BottomSheetModal>
      <View style={styles.footerContainer}>
        <CustomButton
          label='다음'
          onPress={allAgreed === false ? handlePresentModal : () => console.log("isAgreed True!")}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerTextContainer: {
    margin: 30,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    margin: 30,
    gap: 20,
    flex: 1,
  },
  datePicker: {
    marginTop: -10,
  },
  footerContainer: {
    margin: 20,
    justifyContent: 'flex-end'
  },
  termContainer: {
    marginVertical: 10,
    marginLeft: 10,
    padding: 20,
  },
  termInfo: {
    marginBottom: 20,
  },
  termInfoHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  termInfoText: {
    fontSize: 13,
    color: colors.GRAY_500
  },
  termItemContainer: {
    marginTop: 10,
    gap: 5,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  termItemDetail: {
    marginLeft: 'auto'
  },
  termItemDetailText: {
    textDecorationLine: 'underline',
    color: colors.GRAY_700
  },
  termText: {
    marginLeft: 10,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
})

export default SignupScreen
