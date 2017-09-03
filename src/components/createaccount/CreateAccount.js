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
import Api from '../../api/Api'

class CreateAccount extends Component {
  static navigationOptions = {
   title: 'Create Account',
   headerStyle: {
            backgroundColor: Constants.fadedRed,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitle:null,              
  }
  constructor(props){
    super(props)
    this.state={
      username:null,
      password:null,
      error:{
        title:null
      }
    }
    this.onPress=this.onPress.bind(this)
    this.onChangeEmail=this.onChangeEmail.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)
  }

  onChangeEmail(text){
    this.setState({
      username:text
    })
  }
  onChangePassword(text){
   this.setState({
      password:text
    })
  }
  onPress(){
    if(this.state.username!=null && this.state.password!=null){
      
    let data={
      email:this.state.username,
      password:this.state.password
    }
    Api.postApi(data,'users/',(result)=>{

      if(result.id && result.id!=null){
      Api.postApi(data,'users/login/',(result)=>{
        console.log(result)
        this.props.navigation.navigate('Welc')
      })
    }else if(result.message && result.message!=null){
       this.setState({
      error:{
        title:result.message
      }
    })
    }else{
      alert('Unknown error occured,please try again')
    }
    })
  }else{
    this.setState({
      error:{
        title:'Please fill both the fields'
      }
    })
  }

    
  }
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.createAccHeading}>
          <Text style={styles.titleText}>
            Please provide your email id and password.
          </Text>
        </View>
        <View>
          <MyInput type={'email'} placeholder={'johndeo@gmail.com'} onChange={this.onChangeEmail} />
        </View>
        <View style={{marginTop:30}}>
          <MyInput type={'password'} style={{marginTop:20}} placeholder={'password'} secureText={true} onChange={this.onChangePassword} />
        </View>
        {this.state.error.title?<View style={{alignSelf:'flex-start',marginTop:10,marginLeft:15}}>
          <Text style={styles.errorText}>
            {this.state.error.title}
          </Text>
        </View>:null}
        <View style={styles.footer}>
        <Text>
          Don't worry! We won't display your email id unless you choose to
        </Text>
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
  backStyle:{
    color:'#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  createAccHeading:{
    marginTop:30,
    marginBottom:15,
  },
  titleText:{
    fontSize:16,
    fontWeight:'500'
  },
  footer:{
    height:devHeight/4,
    
    alignItems:'center',
    position:'absolute',
    bottom:0

  },
  errorText:{
    color:Constants.fadedRed,
    fontSize:13
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


module.exports=CreateAccount;

