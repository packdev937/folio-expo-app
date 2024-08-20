import {useEffect, useState} from 'react';
import {getDateLocaleFormat} from "../utils";

// initialValue가 객체로 들어옵니다.
interface UseFormProps<T> {
  initialValue: T;
  validate?: (values: T) => Record<keyof T, string>;
}

function useForm<T>({
                      initialValue,
                      validate
                    }: UseFormProps<T>) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  // 상태 값이 useForm 훅 안에 있더라도 추적하여 사용할 수 있습니다.
  const [showPicker, setShowPicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeValue = (key: keyof T, value: any) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  // onBlur 이벤트는 포커스된 텍스트 인풋의 바깥 영역을 클릭했을 때 호출
  // 즉, 해당 이벤트가 발생하고 만약 값의 형식이 올바르지 않다면 에러 메세지를 띄워주는 로직이 필요
  const handleBlur = (key: keyof T) => {
    setTouched({
      ...touched,
      [key]: true,
    });
  };

  const handleToggleDatePicker = () => {
    setShowPicker((prev) => !prev);
  };

  const onChangeDatePicker = ({type}, selectedDate: Date) => {
    if (type === 'set' && selectedDate) {
      setShowPicker(false);
      handleChangeValue('date' as keyof T, selectedDate);
    } else {
      handleToggleDatePicker();
    }
  };

  const getTextInputProps = (key: keyof T) => {
    const value = values[key];
    const onChangeText = (text: string) => handleChangeValue(key, text);
    const onBlur = () => handleBlur(key);

    return {value, onChangeText, onBlur};
  };

  const getDatePickerProps = (key: keyof T) => {
    const value = getDateLocaleFormat(values[key] as Date);
    const onChange = onChangeDatePicker;
    const onChangeText = (text: string) => handleChangeValue(key, text);
    const onPressIn = handleToggleDatePicker;

    return {
      value,
      showPicker,
      onPressIn,
      onChangeText,
      onChange
    };
  };

  useEffect(() => {
    if (validate != null) {
      const newErrors = validate(values);
      setErrors(newErrors);
    }
  }, [validate, values]);


  return {values, errors, touched, getTextInputProps, getDatePickerProps, showPicker};
}

export default useForm;
