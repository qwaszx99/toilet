import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
}from 'react-native';
import Util from './../Util';
export default class List extends Component{
	constructor(props){
		super(props);		
		this.state={
			url:props.url,
			dataSource:null,
		}
	}
	render(){
		return(					
			<FlatList
			  data={this.state.dataSource}
			  renderItem={({item},key) => (
			  	<View style={styles.item} key={key}> 
					<View>
						<Image 
							style={styles.img}
							source={{uri:item.img}}
						/>
					</View>
					<View style={styles.text_wraper}>
						<Text 
							style={styles.title}
							numberOfLines={1}
						>
						{item.title}
						</Text>
						<Text style={styles.time}>{new Date().toLocaleString()}</Text>
					</View>
				</View>	
			  	)}
			/>
		)
	}
	componentWillMount(){
		let url=this.state.url;
		alert(url)
		var that=this;
		fetch(url)
		.then(response=>response.json())
		.then((resJson)=>{
			if(resJson.status===1){
				let data=resJson.data;
				let dataSource=data.map(v=>({key:v.id,...v}))				
				that.setState({
					dataSource:dataSource
				})

			}else{
				alert('获取数据失败');
			}			
						
		}).catch((err)=>{
			alert('服务器异常');
		})				
	}
}


const styles = StyleSheet.create({
	item:{
		height:78,
		paddingLeft:10,
		paddingRight:10,
		borderBottomColor:'#ededed',
		borderBottomWidth:1,
		flexDirection:'row'
	},
	img:{
		width:72,
		height:72,
		borderRadius:3,
		marginTop:7,
	},
	text_wraper:{
		marginLeft:5,
		flex:1,
	},
	title:{
		fontSize:16,
		marginTop:10,
	},
	time:{
		color:'#aaa',
		fontSize:13,
		marginTop:5
	}
});

  //[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]