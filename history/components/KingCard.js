import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import KingTitle from './KingTitle';
import KingImage from './KingImage';



export default class KingCard extends React.Component {
  render() {
    const {imageSource, kingTitle, handleSwipe, onScroll, onPress} = this.props;

    return (

        <View style={styles.container}>

          <KingTitle kingTitle={kingTitle}/>
          <KingImage 
            imageSource={imageSource} 
            handleSwipe={handleSwipe}
            onScroll={onScroll}
        />
        </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    height: '50%',
    width: '70%',
    borderWidth: 2,
    borderColor: 'black',

  },
  containerText: {
    alignItems: 'center'
  },
  text: {
    color: 'red'
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%'
  }
});
