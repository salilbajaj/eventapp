import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;
import ImageSwiper from '../common/ImageSwiper';
import SignUpButtons from './SignUpButtons';

const photos=['https://qdesq.imagekit.io/img/tr:q-10/home.png',"https://qdesq.imagekit.io/img/tr:q-10/search.png","https://qdesq.imagekit.io/tr:q-10/img/screen2.png"]

class SignUp extends Component {
  static navigationOptions = {
     header: null
  }
  constructor(props){
    super(props)
    this.state={
      images:photos
    }
    console.log(this.props.navigation)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageSwiper style={{height:devHeight/2}} images={this.state.images} width={devWidth} height={devHeight/2} />
        <SignUpButtons navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: '#fff',
    height:devHeight
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
});


module.exports=SignUp;