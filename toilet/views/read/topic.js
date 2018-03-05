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
export default class Topic extends Component{
	constructor(props){
		super(props);		
	}
	render(){
		const {navigate,state,goBack}=this.props.navigation;
		return(					
			<View style={styles.container}> 
				<View>
					<Text style={styles.text1}>推荐专题</Text>
				</View>
				<View style={styles.img_view}>
				{
					
					this.props.data.map((v,index)=>(
						<TouchableOpacity 
							key={index}
							onPress={()=>navigate('Detail',{url:v.url,title:v.title})}
						>
							<View style={styles.img_cover}>
								<Image 
									resizeMode='cover'
									style={styles.img} 
									source={{uri:v.img}}
								 />
							</View>
						</TouchableOpacity>
						)
					)
				}
					
						
				</View>	
				<View>
					<Text style={styles.text2}>查看更多同期专题&gt;</Text>
				</View>
			</View>					
		)
	}
	
}


const styles = StyleSheet.create({
	container:{
		marginLeft:10,		
	},
	img:{
		width:(Util.size.width-30)/2,
		height:75,
	},
	img_view:{
		flexDirection:'row',
	},
	img_cover:{
		marginRight:10,
	},
	text1:{
		color:'#5e5e5e',
		marginBottom:5,
		fontSize:17,
		marginTop:5,
	},
	text2:{
		color:'#ccc',
		marginTop:10,
		marginBottom:10,
		fontSize:15,
		fontWeight:'300',
	}
});

