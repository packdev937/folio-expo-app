import React, {useEffect, useRef} from "react";
import {TouchableOpacity, StyleSheet, Animated} from "react-native";
import {colors} from "@/constants";
import Icon from "@/components/common/Icon";

const TabButton = (props) => {
  const {activeIcon, inActiveIcon, onPress, accessibilityState, size, color} = props;
  const focused = accessibilityState.selected;

  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 360,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused]);

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {top: 0}]}
    >
      <Animated.View
        style={{
          transform: [{scale}, {rotate: rotateInterpolate}],
        }}
      >
        <Icon
          size={size}
          name={focused ? activeIcon : inActiveIcon}
          color={color ? color : focused ? colors.PRIMARY : colors.PRIMARY_LITE}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});

export default TabButton;
