import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	
}from 'react-native';

import Topic from './read/topic';
import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';

export default class TabReadPage extends Component{
	static navigationOptions={
		header:null,
	}
	constructor(props){
		super(props);
		this.state={
			isShow:true,
		    isShow: false,
	      	recommendTopic: null,
	      	hotTopic: null,
	      	category: null,
	      	other: null,
	      	refreshing: false
				
		}
	}
	render(){
		return(					
			<View style={styles.container}> 
				<Search/>
				<Hr/>
				{
					this.state.isShow ? 
						<ScrollView style={styles.container}>
							<Topic data={this.state.recommendTopic} navigation={this.props.navigation}/>
							<Hr/>
							<Recommend name="热门推荐" data={this.state.hotTopic}/>
							<Hr/>
							<Category data={this.state.category} navigation={this.props.navigation}/>
							<Hr/>
							<Recommend name="清新一刻" data={this.state.other}/>
						</ScrollView>
					: null	
				}
					
			</View>			
		)
	}
	//fetch data
	componentWillMount(){			
		var that=this;
		fetch('http://192.168.1.105:3000/data/read?type=config')
		.then(response=>response.json())
		.then((data)=>{
			if(data.status===1){
							
				let obj=data.data;
				let hotTopic=obj.hotTopic;
				let recommendTopic=obj.recommendTopic;
				let other=obj.other;
				let category=obj.category;
				
				that.setState({
					isShow:true,
					recommendTopic:recommendTopic,
					hotTopic:hotTopic,
					other:other,
					category:category,
				})
				
			}else{
				alert('服务器异常')
			}
			
		})
		.catch((err)=>{
			alert('出现错误刷新重试');
		})
	}

}
//下划线
class Hr extends Component{
	render(){
		return(
			<View>
				<View style={styles.hr}></View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,		
	},
	hr:{		
		borderColor:'#d4d4d4',
		borderWidth:1,
		marginTop:10,
	}
});

//react-native run-android