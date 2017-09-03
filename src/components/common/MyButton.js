import React, {PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
const MyButton = ({title, onPress, buttonStyle,textStyle}) => {
 return (
   <TouchableOpacity onPress={onPress}>
              <View style={buttonStyle}>
                  <Text style={textStyle}>{title}</Text>
              </View>
              </TouchableOpacity>
  );
};



export default MyButton;
