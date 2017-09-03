import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Swiper from 'react-native-swiper';
  

class ImageSwiper extends Component {
  
  render() {
    
    return (
      <View style={{height:this.props.height}}>
    <Swiper  autoplay={true} dotStyle={{backgroundColor:"rgba(256,256,256,.9)"}} activeDotColor="#000">
  
     <Image source={{uri: this.props.images[0]}} style={{width:this.props.width,height:this.props.height}} />
     <Image source={{uri: this.props.images[1]}} style={{width:this.props.width,height:this.props.height}} />
      <Image source={{uri: this.props.images[2]}} style={{width:this.props.width,height:this.props.height}} />
  
</Swiper>
              </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


module.exports=ImageSwiper;