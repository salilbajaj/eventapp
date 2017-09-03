import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Dimensions from 'Dimensions';
import MyButton from '../common/MyButton'
import Constants from '../common/Constants';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
import CheckBox from 'react-native-check-box';

class Invester extends Component {
  static navigationOptions = {
   title: 'Invester type',
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
      selectedCategory:null,
        angel:false,
        seed:false,
        venture:false,
        private:false
      
    }
    this.onPress=this.onPress.bind(this);
    
  }

 
  onPress(){
    this.props.navigation.navigate('Pul')
  }
  
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{height:devHeight*4/5}}>
          <View style={styles.heading}>
            <Text style={styles.titleText}>
             What type of invester are you?              
            </Text>           
          </View>
          <View style={styles.subHeading}>
             <Text style={styles.subHeadingText}>
              Select the one that’s most relevant 
              </Text>
              <Text style={styles.subHeadingText}>
              to your investment style
              </Text>
          </View>
          <View>
            <CheckBox
                  style={{padding: 10,borderColor:Constants.borderColor,marginTop:5,width:devWidth-50}}
                 onClick={()=>{
                   this.setState({
                   angel:!this.state.angel,                  
              })
            }}
            isChecked={this.state.angel}
            rightTextStyle={{color:Constants.darkText,fontSize:14}}
            rightText={"Angel Investor"}
            />
            <CheckBox
                  style={{padding: 10,borderColor:Constants.borderColor,marginTop:5,width:devWidth-50}}
                 onClick={()=>{
                   this.setState({
                   seed:!this.state.seed                   
              })
            }}
            isChecked={this.state.seed}
            rightTextStyle={{color:Constants.darkText,fontSize:14}}
            rightText={"Seed Investor"}
            />
            <CheckBox
                  style={{padding: 10,borderColor:Constants.borderColor,marginTop:5,width:devWidth-50}}
                 onClick={()=>{
                   this.setState({
                   venture:!this.state.venture                   
              })
            }}
            isChecked={this.state.venture}
            rightTextStyle={{color:Constants.darkText,fontSize:14}}
            rightText={"Venture Capitalist"}
            />
            <CheckBox
                  style={{padding: 10,borderColor:Constants.borderColor,marginTop:5,width:devWidth-50}}
                 onClick={()=>{
                   this.setState({
                   private:!this.state.private                   
              })
            }}
            isChecked={this.state.private}
            rightTextStyle={{color:Constants.darkText,fontSize:14}}
            rightText={"Private Equity"}
            />
          </View>
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
    padding:20, 
  },
  checkboxText:{
    color:Constants.darkText    
  },
  titleText:{
    fontSize:16,
    fontWeight:'500',
 color:Constants.darkText
  },
  footer:{
    height:devHeight/5,
    
    alignItems:'center',
    position:'absolute',
    bottom:0
  },
  heading:{
    alignItems:'center'
  },
  subHeading:{
    marginTop:20,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center'
  },
  subHeadingText:{
    color:Constants.lightText
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


module.exports=Invester;

