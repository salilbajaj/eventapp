import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyInput from '../common/MyInput'
import Dimensions from 'Dimensions';
import MyButton from '../common/MyButton'
import Constants from '../common/Constants';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
import CheckBox from 'react-native-check-box';

class Categories extends Component {
  static navigationOptions = {
   title: 'Categories',
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
      selectedCategory:null
    }
    this.onPress=this.onPress.bind(this);
    
  }

  onPress(){
    this.props.navigation.navigate('Invest')
  }
  
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{height:devHeight*4/5}}>
          <View style={styles.createAccHeading}>
            <Text style={styles.titleText}>
              How are you associated with the 
              <Text>start-up ecosystem?</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{
            this.setState({
              selectedCategory:'startup'
            })
          }}>
          <View style={this.state.selectedCategory=='startup'?styles.categoryHighlight:styles.category}>
            <View style={styles.categoryPart}>
              <Text style={this.state.selectedCategory=='startup'?styles.categoryHighlightText:styles.categoryText}>I work in a</Text>
              <Text style={this.state.selectedCategory=='startup'?styles.categoryHighlightText:styles.categoryText}>start-up</Text>
            </View>
            <View style={styles.categoryPart}>
              <View style={styles.categoryButton}>
                <Text style={{color:'#fff',fontWeight:'600'}}>Startup</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            this.setState({
              selectedCategory:'invester'
            })
          }}>
          <View style={this.state.selectedCategory=='invester'?styles.categoryHighlight:styles.category}>
            
            <View style={styles.categoryPart}>
              <View style={styles.categoryButton}>
                <Text style={{color:'#fff',fontWeight:'600'}}>Invester</Text>
              </View>
            </View>
            <View style={styles.categoryPart}>
              <Text style={this.state.selectedCategory=='invester'?styles.categoryHighlightText:styles.categoryText}>I help fund</Text>
              <Text style={this.state.selectedCategory=='invester'?styles.categoryHighlightText:styles.categoryText}>start-up</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            this.setState({
              selectedCategory:'event'
            })
          }}>
          <View style={this.state.selectedCategory=='event'?styles.categoryHighlight:styles.category}>
            <View style={styles.categoryPart}>
              <Text style={this.state.selectedCategory=='event'?styles.categoryHighlightText:styles.categoryText}>I organize events </Text>
              <Text style={this.state.selectedCategory=='event'?styles.categoryHighlightText:styles.categoryText}>for start-ups</Text>
            </View>
            <View style={styles.categoryPart}>
              <View style={styles.categoryButton}>
                <Text style={{color:'#fff',fontWeight:'600'}}>Event</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <CheckBox
          style={{flex: 1, padding: 10,borderColor:Constants.borderColor,marginTop:15}}
         onClick={()=>{
           this.setState({
           isChecked:!this.state.isChecked,
           selectedCategory:null
      })
    }}
    isChecked={this.state.isChecked}
    rightTextStyle={{color:Constants.darkText,fontSize:14}}
    rightText={"I don’t fall in any of the above categories."}
          />
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
  categoryButton:{
    height:37,
    width:100,
    backgroundColor:Constants.darkText,
    justifyContent:'center',
    alignItems:'center'
  },
  category:{
    width:devWidth-50,
    backgroundColor:'rgb(248,248,248)',
    height:80,
    marginTop:8,
    flexDirection:'row',
  },
   categoryHighlight:{
    width:devWidth-50,
    backgroundColor:Constants.fadedRed,
    height:80,
    marginTop:8,
    flexDirection:'row',
  },
  categoryPart:{
    width:(devWidth-50)/2,
    justifyContent:'center',
    alignItems:'center'
  },
  categoryText:{
    fontSize:18,
    color:Constants.darkText,
    fontWeight:'600'
  },
  categoryHighlightText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600'
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
   
    marginBottom:15,
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


module.exports=Categories;

