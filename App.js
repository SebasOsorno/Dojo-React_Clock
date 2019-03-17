import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Clock from './src/clock';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>¡Esta es la hora local!


        </Text>
        <Clock/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
  }
});
