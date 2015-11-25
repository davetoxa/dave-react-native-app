'use strict';

var React = require('react-native');
var Main = require('./app/components/Main');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

class DavetoxaReactNative extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github',
          component: Main
        }} />
    );
  }
};


AppRegistry.registerComponent('DavetoxaReactNative', () => DavetoxaReactNative);
