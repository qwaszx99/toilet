import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	
}from 'react-native';
import Util from './../Util';
export default class Recommend extends Component{
	render(){
		return(					
			<View style={styles.container}> 
				<View>
					<Text style={styles.text1}>{this.props.name}</Text>
				</View>
				<View style={styles.img_view}>
					{
						this.props.data.map(v=>(
							<View style={[styles.img_item,styles.shadow]} key={new Date().getTime()}>
								<Image style={styles.img} source={{uri:v.img}}/>
								<Text style={styles.title} numberOfLines={2}>{v.title}</Text>
							</View>)
						)
					}
					
					
				</View>
			</View>			
		)
	}
}


const styles = StyleSheet.create({
	container:{		
		marginLeft:10,
		
	},
	img_view:{
		flexDirection:'row',
		flexWrap:'wrap'
	},
	text1:{
		color:'#5e5e5e',
		marginBottom:5,
		fontSize:17,
		marginTop:5,

	},
	img_item:{	
		width:(Util.size.width-50)/4,	
		marginRight:10,		
	},
	shadow:{
		shadowOpacity:1,
		shadowColor:'#ccc',
		shadowOffset:{
			width:1*Util.pixel,
			height:Util.pixel
		}
	},
	img:{
		height:120,
		width:(Util.size.width-50)/4
	},
	title:{
		marginTop:5,
		marginBottom:5,
		fontSize:14,
		color:'#818181',
	}
});

