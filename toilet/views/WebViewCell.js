import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	WebView,	
}from 'react-native';

export default class WebViewCell extends Component{
	constructor(props) {
	  super(props);	
	  this.state = {
	  	url:this.props.url,
	  	isError:false
	  };
	}
	render(){
		return(	

			<View style={styles.container}>	
				{this.state.isError ? 
					<View style={styles.errorInfo}>
						<Text>网络有问题，请检查网络情况，再刷新</Text>
					</View> :				
					<WebView 
					source={{uri:this.state.url}}
					onError={()=>this._showError()}
					startInLoadingState={true}
					/>					
				} 
			</View>			
		)
	}
	_showError(){
		this.setState({
			isError:true
		})
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	errorInfo:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}
});

