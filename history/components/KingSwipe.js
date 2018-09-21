import React from 'react';
import {View,} from 'react-native'
import KingCard from './KingCard';


export default class KingSwipe extends React.Component {

    state = {
        image: require('../assets/kinghenry.jpg'),
        kingTitle: ''
    }
  
  
    handleSwipe = () => {
      
      const newImage = require('../assets/kings.jpg')
      console.log('Scrolled')
  
      this.setState({
        image: newImage
      })
    }

 
  



    render() {
        const {image} = this.state;
    
        return (
    
            <KingCard 
              onScroll={this.handleSwipe} 
              imageSource={image}
              onSwipe={this.handleSwipe}
            />
    
        );
      }
    }