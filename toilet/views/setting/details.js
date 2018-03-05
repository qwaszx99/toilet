import React,{Component} from 'react';
import{
	Text,
	Image,
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity
}from 'react-native';

export default class Details extends Component{
	static navigationOptions=({navigation})=>({
			headerStyle:{
				backgroundColor:'#eee',
				elevation: 0,
				borderBottomWidth:1,
				borderBottomColor:'#ccc'
			},
			headerTitle:(
				<Text style={styles.headerTitleStyle}>{navigation.state.params.title}</Text>
			),
			headerLeft:(
				<TouchableOpacity 
					onPress={()=>navigation.goBack()}
				>
					<Text style={styles.headerLeftStyle}>					
						&lt;
					</Text>
				</TouchableOpacity>
			),
			headerRight:(
				<Text></Text>
			)
		})
	render(){
		const info=[
			{title:'附近卫生间导航',url:'./../../images/help_1.png'},
			{title:'实时天气预报',url:'./../../images/help_2.png'},
			{title:'阅读美好文章',url:'./../../images/help_3.png'}
		];
		return(
			<ScrollView style={styles.container}>
						{
							info.map((v,index)=>(
								<View style={styles.center} key={index}>									
									<Text style={styles.text}>{v.title}</Text>
									<View style={styles.items}>
										<Image
											resizeMode="contain"
											style={styles.icon}
											source={require('./../../images/help_1.png')}
										/>
									</View>
								</View>
							))
						}
				</ScrollView>
			)
	}
}

const styles=StyleSheet.create({
	container:{
	   flex: 1,
	},
	center:{
	   justifyContent:'center',
	   alignItems: 'center'
	},
	icon:{
		width:300,
	    height:530
	},
	items:{
	    width:300,
	    marginBottom:10,
	    shadowOpacity: 1,
	    shadowColor: '#ccc',
	    shadowOffset:{width: 1, height: 1},
	},
	text:{
	    fontSize:16,
	    fontWeight:'300',
	    marginBottom:15,
	    marginLeft:10,
	    marginTop:15
	},
	headerTitleStyle:{
		fontSize:20,
		color:'#888',
		fontWeight:'500',
		alignSelf:'center'
	},
	headerLeftStyle:{
		color:'blue',
		fontSize:24,
		marginLeft:25
	}
})