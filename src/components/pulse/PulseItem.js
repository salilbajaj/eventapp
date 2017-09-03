import React, {PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../common/Constants';
import eye from '../../assets/images/eye.png'
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;

const PulseItem = ({item}) => {
  console.log(item)
 return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image style={{width:50,height:50}} source={{uri:item.icon}} />
      </View>
      <View style={styles.contentContainer}> 
      <View style={{flex:0,flexDirection:'row'}}>       
          <View style={{flexGrow:9}}>          
            <Text style={styles.companyName}>{item.company}</Text>
          </View>  
          <View style={{flexGrow:1}}>
            <Text style={styles.watchText}><Image style={{width:15,height:15,marginTop:3.25}} source={eye} /> {item.watch}</Text>
          </View>          
      </View>
      <View style={{flex:0,flexDirection:'row',marginTop:4}}>       
          <View style={{flexGrow:1,alignItems:'center'}}>          
            <Text style={styles.typeText}>{item.type}</Text>
          </View>  
          <View style={{flexGrow:1,alignItems:'center'}}>
            <Text style={styles.typeText}>{item.location}</Text>
          </View>          
      </View>
      <View style={{flex:0,flexDirection:'row',marginTop:7}}>                
            <Text style={styles.description}>{item.description}</Text>         
      </View>
      </View>
     
    </View> 
  );
};

const styles=StyleSheet.create({
  itemContainer:{
    width:devWidth,
    flex:1,
    height:devHeight/6,
    flexDirection:'row',
    borderBottomWidth:1,
    justifyContent:'center',
    borderColor:Constants.borderColor
  },
  companyName:{
    fontSize:14,
    fontWeight:'700',
    color:Constants.darkText
  },
  description:{
    color:Constants.lightText,
    fontSize:13
  },
  watchText:{
    fontSize:14,
    
    color:Constants.darkText
  },
  typeText:{
    color:Constants.fadedRed,
    fontSize:12,
    fontWeight:'500'
  },
  imageContainer:{
    width:devWidth/4,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:20,
    height:devHeight/5
  },
  contentContainer:{
    width:devWidth*3/4,
    justifyContent:'flex-start',
    flexDirection:'column',
    padding:10
  }
})

export default PulseItem;
