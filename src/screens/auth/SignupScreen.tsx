import React, {useState} from 'react'
import {Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import InputField from "../../components/common/InputField";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {getDateLocaleFormat} from "../../utils";

interface SignupScreenProps {
}

function SignupScreen({}: SignupScreenProps) {
  const [values, setValues] = useState({
    id: '',
    nickname: '',
    date: new Date()
  })

  const [touched, setTouched] = useState({
      id: false,
      nickname: false
    }
  )

  const [showPicker, setShowPicker] = useState(false)

  const handleChangeValue = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value
    })

  }
  // onBlur 이벤트는 포커스된 텍스트 인풋의 바깥 영역을 클릭했을 때 호출
  // 즉, 해당 이벤트가 발생하고 만약 값의 형식이 올바르지 않다면 에러 메세지를 띄워주는 로직이 필요
  const handleBlur = (key: string) => {
    setTouched({
      ...touched,
      [key]: true
    })

  }
  const handleToggleDatePicker = () => {
    setShowPicker(prev => {
      return !prev
    })
  }

  const onChangeDatePicker = ({type}, selectedDate) => {
    if (type === 'set') {
      setShowPicker(false)
      setValues({
        ...values,
        date: selectedDate
      })
    } else {
      handleToggleDatePicker()
    }
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
          error={'아이디를 입력해주세요.'}
          touched={touched.id}
          onChangeText={(value) => handleChangeValue('id', value)}
          onBlur={() => handleBlur('id')}
        />
        <InputField
          caption={'닉네임'}
          placeholder={'홍길동'}
          error={'닉네임을 입력해주세요.'}
          touched={touched.nickname}
          value={values.nickname}
          onChangeText={(value) => handleChangeValue('nickname', value)}
          onBlur={() => handleBlur('nickname')}
        />
          {showPicker && (<RNDateTimePicker
              style={styles.datePicker}
              mode='date'
              display='spinner'
              locale='ko-KR'
              onChange={onChangeDatePicker}
              value={values.date}
            />
          )}

          {!showPicker && (
            <InputField
              caption={'생년월일'}
              placeholder={'1999년 3월 27일'}
              value={getDateLocaleFormat(values.date)}
              onPressIn={handleToggleDatePicker}
              editable={false}
              onChangeText={(value) => handleChangeValue('date', value)}
            />
          )}
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
