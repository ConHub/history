import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import images from '../utils/images'


export default class KingImage extends React.Component {



  render() {

    const {imageSource, onScroll} = this.props;
    return (

          <ScrollView 
            contentContainerStyle={styles.imageContainer}
            horizontal={true} 
            onScrollEndDrag={onScroll}

            >
            <Image style={styles.image} source={imageSource}/>

          </ScrollView>


    );
  }
}

const styles = StyleSheet.create({

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: '100%'
  }
});
