import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import MyInput from '../common/MyInput';
import Constants from '../common/Constants';
import Dimensions from 'Dimensions';
import Camera from '../../assets/images/camera.png';

const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
var ImagePicker = require('react-native-image-picker');


class ProfileContent extends Component {
  static navigationOptions = {
   title: 'Profile',
   headerStyle: {
            backgroundColor: Constants.fadedRed,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
      
  }
  

  constructor(props){
    super(props);
    console.log(props)
    this.onImagePress=this.onImagePress.bind(this);
    this.state={
      avatarSource:null
    }
  }
   onImagePress(){
    
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        
      }
      else if (response.error) {
        
      }
      else if (response.customButton) {
        
      }
      else {

        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    if(this.props.content=='Name'){
      return(
        <View>
          <View>
            <Text style={styles.heading}>Please enter your full name</Text>
            <MyInput type={'text'} placeholder={'Johndoe'} onChange={this.onChangeName} />
          </View>
        </View>
        )
    }
    if(this.props.content=='Picture'){
      return(
        <View>
          <View>
            <Text style={styles.heading}>Show the world what you look like</Text>
             <TouchableOpacity onPress={this.onImagePress}>
            { this.state.avatarSource === null ?
            <View style={styles.outerCircle} >
              <View style={styles.innerCircle} >
                <Image source={Camera} style={{width:70,height:70}} />
              </View>  
            </View>  
           :<Image style={styles.avatar} source={this.state.avatarSource} />}
            </TouchableOpacity>
          </View>
          
        </View>
        )
    } if(this.props.content=='Bio'){
      return(
        <View>
          <View>
            <Text style={{marginTop:10,marginBottom:15}}>Tell us a bit about yourself.</Text>
            <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.bioInput}
              multiline={true}
              numberOfLines={10}
              placeholder={"Type here..."}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
              </View>
            </View>
        </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
    backgroundColor: '#fff',
  padding:20, 
  width:devWidth
  },
  textInputWrapper: {
    height: 200,
    marginBottom: 2,
    borderWidth: 1,
    borderRadius:1.5,
    borderColor:Constants.borderColor
  },
  bioInput:{
    flex: 1,
    width:devWidth-50,
    color: 'black',
    padding:5,
    fontSize:18
  },
  outerCircle:{
    width: 125,
    height: 125,
    alignSelf:'center',
    borderRadius: 125/2,
    borderWidth:1,
    borderColor:'rgb(229,229,229)'
    
},
innerCircle:{
    width: 123,
    height: 123,
    borderRadius: 120/2,
    alignSelf:'center',
    borderWidth:8,
    borderColor:'rgb(246,246,246)',
    justifyContent:'center',
    alignItems:'center'
    
},
avatar: {
   width: 125,
    height: 125,
    alignSelf:'center',
    borderRadius: 125/2,
    borderWidth:1,
    borderColor:'rgb(229,229,229)'
  },
  heading:{
    marginTop:10,
    marginBottom:15,
    fontSize:15,
    color:'rgb(43,46,74)'
  },
  button:{
      padding:15,
      width:devWidth-50,
      height:60,
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


module.exports=ProfileContent;

