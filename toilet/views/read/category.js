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
export default class Category extends Component{	
	constructor(props){
		super(props);
	}
	render(){		
		return(				
			<View style={styles.container}> 
				<Text style={styles.text1}>分类</Text>
				<View style={styles.item_container}>
					{this.props.data.map((v,index)=>(
						<TouchableOpacity 
							key={index}
							onPress={()=>this._goToList(v.text)}
						>
							<View style={styles.row_item} >
								<Text style={styles.title}>{v.text}</Text>
							</View>
						</TouchableOpacity>
						))
					}
					
									
				</View>

			</View>	
				
		)
	}

	_goToList(name){		
		const {navigate,goBack,state} = this.props.navigation;		
		let type=this._getType(name);		
		let url='http://192.168.1.105:3000/data/read?type='+type;		
		navigate('List',{
			title:name,
			type:type,
			url:url
		})
	}
	_getType(name){
		let type='it';
		switch(name){
			case '互联网':
				type='it';
			break;

			case '笑话':
				type='cookies';
			break;

			case '管理':
				type='manager';
			break;

			case '散文':
				type='sanwen';
			break;

			default:
				type='it';
		}
		return type;
	}

}


const styles = StyleSheet.create({
	container:{
		marginLeft:10,		
		marginTop:10,
	},
	text1:{
		color:'#5e5e5e',
		marginBottom:5,
		fontSize:17,
		marginTop:5,
	},
	item_container:{
		flexDirection:'row',
		flexWrap:'wrap',
	},
	row_item:{
		alignItems:'center',
		justifyContent:'center',
		height:81,
		width:(Util.size.width-30)/2,
		borderColor:'#f1f1f1',
		borderColor:'green',
		borderWidth:Util.pixel,
		marginRight:10,
		marginTop:10,
		borderRadius:5,
	},
	title:{
		color:'#707070',
		fontSize:17,
		fontWeight:'400',
	}
});

