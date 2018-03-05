import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,	
	Image,
	PixelRatio
}from 'react-native';
//1、fetch
//2、获取屏幕宽高
//获取最小线宽
import Dimensions from 'Dimensions';
const {width,height}=Dimensions.get('window');
module.exports={
	size:{
		width:width,
		height:height
	},
	//10*1/PixelRatio.get()
	pixel:1/PixelRatio.get(),
	//fetch <=> ajax
	get:function(url,successCallback,failCallback){
		fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        successCallback(responseJson);
      })
      .catch((error) => {
        failCallback(error);
      });
	}
};
