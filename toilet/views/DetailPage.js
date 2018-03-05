import React,{Component} from 'react';
import {
	View,
	Text,
	Image,	
	StyleSheet,
	TouchableOpacity,
}from 'react-native';

import WebViewCell from './WebViewCell';

export default class ListPage extends Component{
	static navigationOptions=({navigation})=>({
			headerStyle:{
				backgroundColor:'#eee',
	
			},
			headerTitle:(
				<Text style={styles.headerTitleStyle}>{navigation.state.params.title}</Text>
			),
			
			headerRight:(
				<Text></Text>
			)
		})
	render(){		
		return(					
			<View style={styles.container}> 
				<WebViewCell url={this.props.navigation.state.params.url}/>
			</View>
		)
	}
}
const styles=StyleSheet.create({
	container:{
		flex:1
	},
	headerTitleStyle:{
		fontSize:20,
		color:'#888',
		fontWeight:'500',
		alignSelf:'center'
	},
})

