import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	
}from 'react-native';
import WebViewCell from './WebViewCell';
export default class TabWeatherPage extends Component{
	static navigationOptions={
		header:null
	}

	render(){
		return(					
			<View style={styles.container}> 
				<WebViewCell url="http://192.168.1.105:3000/weather"/>
			</View>			
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1
	}
});

