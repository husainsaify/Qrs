import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './boxContainerstyles';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants';

const BoxContainer = props => {
  const {
    source,
    heading,
    subHeading,
    thirdHeading,
    onPress,
    name,
    size,
    Price,
    marginTop,
    borderRadius,
    borderColor,
    borderWidth,
    backgroundColor,
    paddingVertical,
    paddingBottom,
    IconComponent,
    fontWeight = 'normal',
    fontSize = moderateScale(10) in props
      ? props.fontSize
      : styles.heading.fontSize,
    color,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, {paddingVertical, marginTop: marginTop}]}>
      {IconComponent ? (
        <IconComponent height={moderateScale(40)} width={moderateScale(40)} />
      ) : (
        <Image
          style={[
            styles.image,
            {backgroundColor, borderRadius, borderColor, borderWidth},
          ]}
          source={source}
        />
      )}

      <View style={styles.textContainer}>
        <Text style={[styles.heading, {fontWeight, fontSize, marginTop}]}>
          {heading}
        </Text>
        <Text style={[styles.subHeading]}>{subHeading}</Text>
        <Text style={[styles.thirdHeading]}>{thirdHeading}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name={name}
          size={size}
          color={color ? color : 'black'}
          style={styles.icon}
        />
        <Text style={[styles.price, {paddingBottom}]}>{Price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoxContainer;
