import React, {useRef} from 'react'
import {Dimensions, Pressable, StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native'
import {colors} from "../../constants";

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  caption?: string;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function InputField({disabled, caption, error, touched, onPress, ...props}: InputFieldProps) {
  const innerRef = useRef<TextInput | null>(null);

  // InputField는 TextInput 외에도 에러 메세지를 띄우는 Text가 같이 View로 묶여있음
  // Pressable로 해당 View를 감싸서 View 를 클릭해도 포커스가 가도록 설정
  const handlePressInput = () => (
    innerRef.current?.focus()
  )

  return (
    <View>
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>{caption}</Text>
      </View>
      <Pressable onPress={() => handlePressInput()}>
        <View style={[
          styles.container,
          disabled && styles.disabled,
          touched && Boolean(error) && styles.inputError
        ]}>
          <TextInput
            ref={innerRef}
            style={[
              styles.input,
              disabled && styles.disabled
            ]}
            editable={!disabled}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            {...props}
          />
          {touched && Boolean(error) &&
            <Text style={styles.error}>
              {error}
            </Text>
          }
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  captionContainer: {
    marginBottom: 10,
    marginLeft: 5,
  },
  captionText: {
    color: colors.GRAY_500,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 10,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700
  },
  inputError: {
    borderColor: colors.RED_300
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  }
})

export default InputField
