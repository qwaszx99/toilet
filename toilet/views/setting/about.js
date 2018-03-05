import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

export default class About extends Component{
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
      <ScrollView style={styles.container}>
        <Text style={styles.text}>如果问题,请联系: wlhmyit@126.com</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:3
  },
  headerTitleStyle:{
		fontSize:20,
		color:'#888',
		fontWeight:'500',
		alignSelf:'center'
	},
});

