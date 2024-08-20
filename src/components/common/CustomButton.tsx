import React, {ReactNode} from 'react'
import {Dimensions, Pressable, PressableProps, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import {colors} from "../../constants";

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean;
  style?: StyleProp<ViewStyle>
  icon?: ReactNode;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
                        label,
                        variant = 'filled',
                        size = 'large',
                        inValid = false,
                        style = null,
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
        style,
      ]}
      {...props}>
      <View style={styles[size]}>
        {icon}
        <Text style={[styles.text, styles[`${variant}Text`]]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles =
  StyleSheet.create({
    container: {
      borderRadius: 3,
      flexDirection: 'row',
      justifyContent: 'center',
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
    large: {
      width: '100%',
      paddingVertical: deviceHeight > 700 ? 15 : 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
    },
    medium: {
      width: '50%',
      paddingVertical: deviceHeight > 700 ? 12 : 8,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
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
