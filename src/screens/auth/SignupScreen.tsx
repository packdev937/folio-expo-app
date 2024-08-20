import React, {useState} from 'react'
import {Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import InputField from "../../components/common/InputField";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import useForm from "../../hooks/useForm";
import {validateSignup} from "../../utils";

function SignupScreen() {
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
          // value={values.id}
          // onChangeText={(value) => handleChangeValue('id', value)}
          // onBlur={() => handleBlur('id')}
          {...login.getTextInputProps('id')}
        />
        <InputField
          caption={'닉네임'}
          placeholder={'홍길동'}
          error={login.errors.nickname}
          touched={login.touched.nickname}
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
  },
  datePicker: {
    marginTop: -10,
  },
})

export default SignupScreen
