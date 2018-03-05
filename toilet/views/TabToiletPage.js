import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	WebView,
	Alert,	
}from 'react-native';
import WebViewCell from './WebViewCell';
import Util from './Util';
export default class TabToiletPage extends Component{
	static navigationOptions={
		header:null
	}
//http://localhost:4000/toilet/toilet/html/nearyby.html
	render(){
		return(					
			<View style={styles.container}> 
				<WebViewCell url="http://192.168.1.105:3000/nearby"/>	
			</View>			
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1
	}
});

