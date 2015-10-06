/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  Navigator,
  Text,
  View,
  ToastAndroid,
} = React;

var TimerMixin = require('react-timer-mixin');

var SplashScreen = require('./Splash');
var MainPage = require('./MainPage');

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RNMeituan = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function() {
    return {splash: false};
  },
  componentDidMount: function() {
    this.setTimeout(
      () => {this.setState({splash: true});}, 2000,
    );
  },
  renderScene: function(route, navigation) {
    _navigator = navigation;
    if (route.name === 'mainpage') {
      // ToastAndroid.show('主页', ToastAndroid.SHORT);
      return(
        <View style = {styles.container1}>
          <MainPage navigator = {navigation}/>
        </View>
      );
    }
  },
  render: function() {
    if (this.state.splash) {
      var initialRoute = {name: 'mainpage'};
      return (
        <Navigator
         style = {styles.container}
         initialRoute = {initialRoute}
         configureScene = {() => Navigator.SceneConfigs.FadeAndroid}
         renderScene = {this.renderScene} />
      );
    } else {
      return (
        <SplashScreen />
      );
    }
  }
});

var styles = StyleSheet.create({
    container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNMeituan', () => RNMeituan);
