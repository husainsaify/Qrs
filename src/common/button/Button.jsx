import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Button = (props) => {
  const {
    buttonText,
    onPress,
    width = "50%" in props ? props.width : styles.container.width,
    position,
    top,
    bottom,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, { width, position, top, bottom }]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{buttonText || "ADD"}</Text>
    </TouchableOpacity>
  );
};

export default Button;
