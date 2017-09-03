var React = require('react')
var ReactNative = require('react-native');
import Constants from '../components/common/Constants';


var {
  Component
} = React
var {
  NetInfo
} = ReactNative;

  class api extends Component {

    constructor(props) {
      super(props);          
    }
    postApi(postData,params,cb){
      console.log(postData)
        let url=Constants.URL.api+params
        fetch(url,{
          method: 'post',
             headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
        })
     .then((response)=>{
        if(response){
          return response.json();
        }else{
          throw err;
        }
      })
      .then((result)=>{
        if(result){
          return cb(result)
      }
      }).catch((err)=>{       
        console.log(err)
      })
    }
    pulseData(cb){
      let data=[
      {
        id:1,
        company:'Disruptive Technologies',
        icon:'https://gravatar.com/avatar/0641ab70b985897cc98643c9a64bff69?d=identicon',
        watch:24,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      },
      {
        id:2,
        company:'Accutek Industries',
        icon:'https://gravatar.com/avatar/7b73b67c61f78d7753d3b341f5b26be2?d=identicon',
        watch:14,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      },
       {
        id:3,
        company:'Disruptive Technologies',
        icon:'https://gravatar.com/avatar/0641ab70b985897cc98643c9a64bff69?d=identicon',
        watch:24,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      },
      {
        id:4,
        company:'Accutek Industries',
        icon:'https://gravatar.com/avatar/7b73b67c61f78d7753d3b341f5b26be2?d=identicon',
        watch:14,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      },
       {
        id:5,
        company:'Disruptive Technologies',
        icon:'https://gravatar.com/avatar/0641ab70b985897cc98643c9a64bff69?d=identicon',
        watch:24,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      },
      {
        id:6,
        company:'Accutek Industries',
        icon:'https://gravatar.com/avatar/7b73b67c61f78d7753d3b341f5b26be2?d=identicon',
        watch:14,
        type:'E-Commerce',
        location:'Arizona,USA',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting.'
      }
      ]
      return cb(data);
  }    
};

  module.exports= new api();
