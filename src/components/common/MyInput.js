import React, {PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Dimensions from 'Dimensions';
import Constants from './Constants';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;

const MyInput = ({value,type, onChange,placeholder,secureText}) => {
 return (
    <View style={styles.textInputWrapper}>
   <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
        type={type}
        secureTextEntry={secureText}
        placeholder={placeholder}
        
      >
      </TextInput>
      </View>
  );
};

const styles = StyleSheet.create({
  
  textInputWrapper: {
    height: 50,
    marginBottom: 2,
    borderWidth: 1,
    borderRadius:1.5,
    borderColor:Constants.borderColor
  },
  textInput: {
    flex: 1,
    width:devWidth-50,
    color: 'black',
    height: 42,
    padding: 7
  }
})

export default MyInput;
