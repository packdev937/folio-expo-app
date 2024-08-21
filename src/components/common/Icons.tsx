import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({name, color, size = 24, style}: IconProps,) => {
  const fontSize = 24;
  return (
    <>
      {name && (
        <Ionicons name={name} size={size || fontSize} color={color} style={style}/>
      )}
    </>
  )
}

export default Icon
