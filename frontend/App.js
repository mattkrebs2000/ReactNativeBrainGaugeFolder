import React from 'react';
import { StyleSheet } from 'react-native';
import Braingauge from './src/Braingauge';

export default class App extends React.Component {
  render() {
    return(
    <Braingauge />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
