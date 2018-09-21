import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Title from './components/Title'
import KingSwipe from './components/KingSwipe'


export default class App extends React.Component {






  render() {

    return (
      <View style={styles.container}>
        <Title title="HISTORY" />

        <KingSwipe />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
