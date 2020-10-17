import React from 'react';
import { StyleSheet } from 'react-native';
import Braingauge from './src/Braingauge';
import Navigator1 from './routes/homestack';

export default class App extends React.Component {
  render() {
    return(
    <Navigator1 />
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
