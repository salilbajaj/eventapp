import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyInput from '../common/MyInput'
import Dimensions from 'Dimensions';
import MyButton from '../common/MyButton'
import Constants from '../common/Constants';

const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;


class Welcome extends Component {
  static navigationOptions = {
   title: 'Welcome',
   headerStyle: {
            backgroundColor: Constants.fadedRed,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitle:null      
  }
  constructor(props){
    super(props)
    this.onPress=this.onPress.bind(this)
  }

  onPress(){
    this.props.navigation.navigate('Profile')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.congratsContainer}>
          <Text style={{color:Constants.fadedRed,fontSize:30}}>Congratulations!</Text>
          <Text style={{paddingTop:20}}>Your account has been created.</Text>
        </View>
        <View style={{marginTop:10,alignItems:'center'}}>
          <Text style={{paddingTop:20,fontSize:20}}>
            Now lets get some basic details
          </Text>
          <Text style={{fontSize:20}}>
            out of the way.
          </Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
  padding:20
  },
  congratsContainer:{
    height:devHeight/4,
    width:devWidth-50,
    marginTop:5,
    borderColor: '#fff',
     alignItems: 'center',
      justifyContent:'center',
   backgroundColor:'#fff',
      shadowOffset:{
              width: 1,
              height: 1,
          },
          shadowColor: 'rgba(0,0,0,.4)',
          shadowOpacity: 0.3,
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
    footer:{
    height:devHeight/5,
    
    alignItems:'center',
    position:'absolute',
    bottom:0

  },
});


module.exports=Welcome;

