import React, {ReactNode} from 'react';
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import {colors} from "../../constants";

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium' | 'small';
  inValid?: boolean;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
                        label,
                        variant = 'filled',
                        size = 'large',
                        inValid = false,
                        style = null,
                        fontStyle = null,
                        icon = null,
                        ...props
                      }: CustomButtonProps) {

  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
        styles[size],  // size 스타일을 이곳에 직접 적용
        style,
      ]}
      {...props}>
      <View style={styles.buttonContent}>
        {icon}
        <Text style={[styles.text, styles[`${variant}Text`], fontStyle]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.GRAY_200,
  },
  outlined: {
    borderColor: colors.BLUE_700,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.GRAY_500,
  },
  outlinedPressed: {
    borderColor: colors.GRAY_300,
    borderWidth: 1,
    opacity: 0.5,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  large: {
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    paddingHorizontal: 20,
  },
  medium: {
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    paddingHorizontal: 15,
  },
  small: {
    paddingVertical: deviceHeight > 700 ? 10 : 6,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: colors.BLUE_700,
  },
  outlinedText: {
    color: colors.BLUE_700,
  },
});

export default CustomButton;
