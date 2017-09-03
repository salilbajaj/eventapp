import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  CameraRoll,
  NativeModules,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyInput from '../common/MyInput'
import MyButton from '../common/MyButton'
import StepIndicator from 'react-native-step-indicator';
import ProfileContent from './ProfileContent';
import Dimensions from 'Dimensions';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
import Constants from '../common/Constants';
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 8,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: Constants.fadedRed,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Constants.fadedRed,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: Constants.fadedRed,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: Constants.fadedRed,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: Constants.fadedRed,
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#fff', 
  stepIndicatorLabelFinishedColor:'#fff',
  stepIndicatorLabelUnFinishedColor: '#000'
}

class Profile extends Component {
  static navigationOptions = {
   title: 'Profile',
   headerStyle: {
            backgroundColor: Constants.fadedRed,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitle:null,
  }
  

  constructor(props){
    super(props);
    this.onPress=this.onPress.bind(this);
    
     this.state = {
        currentPosition: 0,
        content:'Name'
    }
  }

  onPress(){
    if(this.state.currentPosition==0){
   this.setState({
       currentPosition: 1,
        content:'Picture' 
   })
 }else if(this.state.currentPosition==1){
   this.setState({
       currentPosition: 2,
        content:'Bio' 
   })
 }else{
   this.props.navigation.navigate('Categ')
 }
  }
 

  render() {
    
    return (

      <View style={styles.container}>
      <View style={{alignItems:'center',paddingBottom:15}}>
        <Text style={{fontSize:20,fontWeight:'600'}}>{this.state.content}</Text>
        </View>
        <View style={{alignSelf:'stretch'}}>
        <StepIndicator

           customStyles={customStyles}
           currentPosition={this.state.currentPosition}
           stepCount={3}
          />
          </View>
        <View  style={{marginTop:30}}>
          <ProfileContent  content={this.state.content} />
       </View>
        <View style={styles.footer}>
          <MyButton title="Continue" onPress={this.onPress} buttonStyle={[styles.button,{backgroundColor:Constants.fadedRed,marginTop:15}]} textStyle={styles.buttonText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
     alignItems:'center',
    backgroundColor: '#fff',
  padding:20, 
  width:devWidth
  },
  
  button:{      
      width:devWidth-50,
      height:52,
      justifyContent:'center'
    },
   buttonText:{
      color:'#fff',
      alignSelf:'center',
      fontWeight:'600'
    },
    footer:{
   height:devHeight/5,
    
    alignItems:'center',
    position:'absolute',
    bottom:0
  },
});


module.exports=Profile;

