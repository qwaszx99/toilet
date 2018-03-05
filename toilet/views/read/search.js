import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	TextInput,
}from 'react-native';
import Util from './../Util';
export default class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			text:''
		}
	}
	render(){
		return(					
			<View style={styles.container}> 
				 <TextInput
				 	underlineColorAndroid="transparent"
			        style={styles.searchInput}
			        placeholder="搜索"
			        placeholderTextColor='#333333'
			        onChangeText={(text) => this.setState({text})}
			        value={this.state.text}
			      />
			</View>			
		)
	}
}



const styles = StyleSheet.create({
	container:{
		
		paddingLeft:10,
		paddingRight:10,
		paddingTop:10,
	},
	searchInput:{
		height: 50, 
		paddingLeft:5,
		borderColor: 'gray', 
		borderWidth: Util.pixel,
		borderRadius:3,
		fontSize:16,
	},

});

