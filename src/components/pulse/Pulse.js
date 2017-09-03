import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import MyButton from '../common/MyButton'
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
import Constants from '../common/Constants';
import PulseItem from './PulseItem';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;

import Api from '../../api/Api';

class Pulse extends Component {
  static navigationOptions = {
   title: 'Pulse',
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
     loading:false      
    }
    this.onPress=this.onPress.bind(this);
    
  }

 
  onPress(){
    this.props.navigation.navigate('Welc')
  }
  componentDidMount(){
    this.fetchData() 
  }
  fetchData(){
    console.log('bh')
    Api.pulseData((data)=>{
      this.setState({
        recData:data
      })
    })
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <PulseItem item={item} />
  );
  render() {
     const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <FlatList
        data={this.state.recData}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {      
    backgroundColor: '#fff',
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


module.exports=Pulse;

