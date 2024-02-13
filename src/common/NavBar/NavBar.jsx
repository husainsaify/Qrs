import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
 import styles from './navBar'
  import {useIsFocused, useNavigation} from '@react-navigation/native';
  
  import {assets} from '../../assets';

 
  import {
    COLORS,
    horizontalScale,
    moderateScale,
    verticalScale,
  } from '../../constants';
// import { LoginIcon } from '../../assets/icons/icons';

  const NavBar = props => {
    const navigation = useNavigation();
    const {heading, source,marginTop,onPress} = props;
   
    const isFocused = useIsFocused();
   
   
  
    return (
      <View style={[styles.NavContainer,{marginTop:marginTop}]}>
        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.notificationContainer}>
         {/* <LoginIcon  width={horizontalScale(50)} height={verticalScale(50)}/> */}
     
       
        </TouchableOpacity>
  
        <Text style={styles.navText}>{heading}</Text>
        <TouchableOpacity onPress={onPress}
         activeOpacity={0.9}
          style={styles.notificationContainer}>
         <Image source={source} resizeMode='center' style={{height:verticalScale(30), width:horizontalScale(40)}} />
        
        </TouchableOpacity>
  
    
      </View>
    );
  };
  
  export default NavBar;
  