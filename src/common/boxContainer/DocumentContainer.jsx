import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./documentContainerStyles";

const DocumentContainer = (props) => {
  const { source, heading, subHeading, onPress, ButtonText,fontSize,paddingHorizontal, fontSize2, IconComponent } = props;
  const [buttonText, setButtonText] = useState();

  const handlePress = () => {
    setButtonText("Complete");
    if(onPress){
      onPress();
    }
  };

  const ButtonColor =
    ButtonText === "Completed" || ButtonText === "Paid" || ButtonText === "Valid" || ButtonText === "Read"
      ? "black"
      : "#EB742E";
     
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={source} />
        <View style={styles.textContainer}>
          <Text style={[styles.heading,{fontSize}]}>{heading}</Text>
          <Text style={[styles.subHeading]}>{subHeading}</Text>
        </View>
        {ButtonText ? (
          <TouchableOpacity
            style={[styles.btnContainer, { borderColor: ButtonColor,paddingHorizontal  }]}
            onPress={handlePress}
          >
            <Text style={[styles.btnText, { color: ButtonColor}]}>
              {ButtonText}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default DocumentContainer;
