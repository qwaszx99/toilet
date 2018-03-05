import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	
}from 'react-native';

export default class TabSettingPage extends Component{
	static navigationOptions={
		header:null
	}

	render(){
		const {navigate,state,goBack}=this.props.navigation;
		return(	
			<ScrollView style={styles.container}>				
				<View > 
					<View>
						<TouchableOpacity  
							style={styles.img_view}							
						>
							<Image 
								style={styles.icon}
								source={require('./../images/logo.png')}
								resizeMode="contain"
							/>
							<Text style={styles.version}>v1.0.0</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.text_view}
							onPress={()=>navigate('Details',{title:'功能介绍'})}
						>
							<Text style={styles.text}>功能介绍</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.text_view}
							onPress={()=>navigate('Help',{title:'帮助中心'})}
						>
							<Text style={styles.text}>帮助中心</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.text_view}
							onPress={()=>navigate('Tips',{title:'服务条款'})}
						>
							<Text style={styles.text}>服务条款</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.text_view}
							onPress={()=>navigate('About',{title:'关于'})}
						>
							<Text style={styles.text}>关于</Text>
						</TouchableOpacity>
					</View>
				</View>	
			</ScrollView>		
		)
	}
}


const styles = StyleSheet.create({
	container:{
		backgroundColor:'#fff',		
	},
	img_view:{
		justifyContent:'center',
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor:'#ececec',				
	},
	icon:{
		width:80,
		height:100,
	},
	text_view:{		
		borderBottomWidth:1,
		borderBottomColor:'#ececec',
		height:40,
		paddingLeft:10,
		justifyContent:'center',
	},
	text:{
		fontSize:16,
		color:'#888',
		fontWeight:'400',
	},
	version:{
		fontSize:13,
		fontWeight:'300',
		marginBottom:20,
	}
	
});

