import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Dimensions from 'Dimensions';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
const contHeight=devHeight/2
import MyButton from '../common/MyButton'
import Constants from '../common/Constants';

class SignUpButtons extends Component {
  constructor(props){
    super(props)
    //this.onPressCreate=this.onPressCreate.bind(this)
    console.log(this.props.navigation)
    
  }

  
  render() {
const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.buttonsCont}>
          <MyButton title="Continue with Linked In" buttonStyle={[styles.button,{backgroundColor:'rgb(44,43,76)'}]} textStyle={styles.buttonText} />
          <MyButton title="Create Account" onPress={() => navigate('Create')} buttonStyle={[styles.button,{backgroundColor:Constants.fadedRed,marginTop:15}]} textStyle={styles.buttonText} />
          <View style={styles.disclaimer}>
            <Text style={{color:'rgb(119,119,136)'}}>Please read our <Text style={{color:Constants.fadedRed}}>terms and conditions</Text>{"\n"} and <Text style={{color:Constants.fadedRed,alignSelf:'center'}}> privacy policy </Text></Text>
          </View>
        </View>
        <View style={styles.login}>
          <Text style={{color:'rgb(119,119,136)'}}>Already have an account? Login ></Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height:devHeight/2,
    justifyContent:'flex-end'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login:{
    height:contHeight/6,
    alignItems:'center',
    justifyContent:'center'
  },
  disclaimer:{
    marginTop:20,
    alignItems:'center'
  },
  buttonsCont:{
    height:contHeight-contHeight/6,
    padding:40,
    borderColor: '#D7D7D7',
    borderBottomWidth:.5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
      padding:15,
      width:devWidth-50,
      height:52,
      justifyContent:'center'
    },
    buttonText:{
      color:'#fff',
      alignSelf:'center',
      fontWeight:'600'
    },
});


module.exports=SignUpButtons;