import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
          hora: new Date().getHours(),
          min: new Date().getMinutes(),
          seg: new Date().getSeconds(),
        };
      }

      tick() {
        this.setState({
            hora: new Date().getHours(),
            min: new Date().getMinutes(),
            seg: new Date().getSeconds(),
        });
      }

      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.hora}:{this.state.min}:{this.state.seg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },
  text:{
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ff00ff'
  }
});