import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Title extends React.Component {
    render() {
        const {title} = this.props;

      return (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

      );
    }
  }
  
  const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'black',
      height: '10%',
      width: '80%',
      margin: 60
    },
    title: {
      color: 'blue',
      fontSize: 40,
  
    }
  });
  