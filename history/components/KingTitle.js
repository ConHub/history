import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class KingTitle extends React.Component {
  render() {
    const {kingTitle} = this.props;

    return (

          <View style={styles.container}>
            <Text style={styles.text}>{kingTitle}</Text>
          </View>


    );
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  }

});
