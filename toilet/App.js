/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import{
  StackNavigator,
  TabNavigator,
}from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import TabToiletPage from './views/TabToiletPage';
import TabReadPage from './views/TabReadPage';
import TabWeatherPage from './views/TabWeatherPage';
import TabSettingPage from './views/TabSettingPage';
import ListPage from './views/ListPage';
import DetailPage from './views/DetailPage';
import About from './views/setting/about';
import Details from './views/setting/details';
import Help from './views/setting/help';
import Tips from './views/setting/tips';
const ToiletIcon=require('./images/if_toilet_103227.png');
const ReadIcon=require('./images/if_Streamline-52_185072.png');
const WeatherIcon=require('./images/if_cloud_115749.png');
const SettingIcon=require('./images/if_Streamline-75_185095.png');

const ToiletPageStack=StackNavigator({
  TabToiletPage:{
    screen:TabToiletPage,
    navigationOptions:()=>TabOptions('卫生间',ToiletIcon,ToiletIcon),
  }
},{
  mode:'modal',
})

const ReadPageStack=StackNavigator({
  TabReadPage:{
    screen:TabReadPage,
    navigationOptions:()=>TabOptions('阅读',ReadIcon,ReadIcon),
  }
},{
  mode:'modal',
})

const WeatherPageStack=StackNavigator({
  TabWeatherPage:{
    screen:TabWeatherPage,
    navigationOptions:()=>TabOptions('天气', WeatherIcon, WeatherIcon),
    
  }
},{
  mode:'modal',
})

const SettingPageStack=StackNavigator({
  TabSettingPage:{
    screen:TabSettingPage,
    navigationOptions:()=>TabOptions('设置',SettingIcon,SettingIcon),
  }
},{
  mode:'modal',
})

const MainScreenNavigator=TabNavigator({
  TabToiletPage:{
    screen:ToiletPageStack,
    navigationOptions:{    
    }
  },
  TabReadPage:{
    screen:ReadPageStack,
    navigationOptions:{   
    }
  },
  TabWeatherPage:{
    screen:WeatherPageStack,
    navigationOptions:{

    }
  },
  TabSettingPage:{
    screen:SettingPageStack,
    navigationOptions:{

    }
  },
},{
  tabBarPosition:'bottom',
  swipeEnabled:true,
  animationEnabled:false,
  backBehavior:'none',
  lazy:true,
  tabBarOptions:{
    labelStyle:{
      margin:2,
      paddingTop:2,
    },
    iconStyle:{
      height:50,
      width:50,
      margin:0
    },
    style:{
      height:70,
      backgroundColor:'white'
    },
    activeBackgroundColor:'white',
    activeTintColor:"#ff3344",
    inactiveTintColor:'#aaa',
    showIcon:true,
    showLabel:false,
    pressOpacity:0.3,
    indicatorStyle:{
      height:0,
    }
  },
})
const App=StackNavigator({
  Home:{
    screen:MainScreenNavigator,
    navigationOptions:{

    }
  },
  List:{
    screen:ListPage,
    navigationOptions:{

    }
  },
  Detail:{
    screen:DetailPage,
    navigationOptions:{

    }
  },
  About:{
    screen:About,
    navigationOptions:{

    }
  },
  Details:{
    screen:Details,
    navigationOptions:{

    }
  },
  Help:{
    screen:Help,
    navigationOptions:{

    }
  },
  Tips:{
    screen:Tips,
    navigationOptions:{

    }
  }
})

const TabOptions=(tabBarTitle,normalImage,selectedImage)=>{
  const tabBarLabel=tabBarTitle;
  const tabBarIcon=(({tintColor,focused})=>{
    return (
      <View style={styles.tabImg}>
        <Image
          source={!focused ? normalImage : selectedImage}
          style={[{height:26,width:26},{tintColor:tintColor}]}
        />
        <Text style={{color:focused ? '#ff3344' : '#43484d'}}>{tabBarTitle}</Text>
      </View>
    )
  });
  const  headerTitleStyle={fontSize:(Platform.OS==='ios') ? 20 : 24, color:'white',alignSelf:'center'};
  const tabBarVisible=true;
  return {tabBarLabel,tabBarIcon,headerTitleStyle,tabBarVisible};
}
const styles = StyleSheet.create({
 tabImg:{   
    justifyContent: 'center',
    alignItems: 'center',
   
  },
 img:{
   height:100,
  },
  titleMsg:{
    textAlign:'center',
    color:'#ff3234',
    paddingTop:40,
    paddingBottom:20,
  },
});
export default App;