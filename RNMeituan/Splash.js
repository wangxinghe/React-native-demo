'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Image,
	Text,
	View,
	Dimensions,
} = React

var Animated = require('Animated');
var SCREEN_WIDTH = Dimensions.get('window').width;

var Splash = React.createClass({
	getInitialState: function() {
		return {bounceValue: new Animated.Value(1)};
	},
	componentDidMount: function() {
		this.state.bounceValue.setValue(1);
		Animated.timing(
			this.state.bounceValue, {toValue: 1.2, duration: 4000}
		).start();
	},
	render: function() {
		var img = require('image!splash');
		var logo = require('image!splash_logo');
		var text = "@wangxinghe.me";
		return(
			<View style = {styles.container}>
				<Animated.Image source = {img}
				 	style = {{
				 	flex: 1,
					height: 1,
					width: SCREEN_WIDTH,
					transform: [{scale: this.state.bounceValue},]}}/>
				<Image style = {styles.logo} source = {logo}/>
				<Text style = {styles.text}>{text}</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	logo: {
		resizeMode: 'contain',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 30,
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
		color: 'white',
		resizeMode: 'contain',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 10,
	},
	animateImage: {
		flex: 1,
		height: 1,
		width: SCREEN_WIDTH,
	}
});

module.exports = Splash;