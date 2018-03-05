import React,{Component} from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
}from 'react-native';
import List from './read/list';
export default class ListPage extends Component{
	static navigationOptions=({navigation})=>({
			headerStyle:{
				backgroundColor:'blue',
	
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
			<View>
				<List url={this.props.navigation.state.params.url}/>
			</View>
		)
	}
}
const styles=StyleSheet.create({
	headerTitleStyle:{
		fontSize:20,
		color:'white',
		fontWeight:'500',
		alignSelf:'center'
	},
})
// headerStyle
// headerTitle
// headerTitleStyle 
// headerBackTitle 
// headerLeft


