import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export type IconLibrary = 'Ionicons' | 'MaterialIcons' | 'FontAwesome' | 'AntDesign';

export interface IconProps {
  library: IconLibrary;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({library, name, color, size = 24, style}: IconProps) => {
  const renderIcon = () => {
    switch (library) {
      case 'Ionicons':
        return <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={size} color={color} style={style}/>;
      case 'MaterialIcons':
        return <MaterialIcons name={name as keyof typeof MaterialIcons.glyphMap} size={size} color={color} style={style}/>;
      case 'FontAwesome':
        return <FontAwesome name={name as keyof typeof FontAwesome.glyphMap} size={size} color={color} style={style}/>;
      case 'AntDesign':
        return <AntDesign name={name as keyof typeof AntDesign.glyphMap} size={size} color={color} style={style}/>;
      default:
        return null;
    }
  };

  return <>{renderIcon()}</>;
};

export default Icon;
