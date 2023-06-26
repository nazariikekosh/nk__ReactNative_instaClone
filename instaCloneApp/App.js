import React from 'react';
import { StyleSheet, Text, View } from  'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';




const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarShowLabel: false,
        tabBarStyle:{
          height: 50,
        },

        tabBarIcon: ({focused, colour, size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName= focused ? "home-sharp" : "home-outline";
            size = focused ? size+8 : size+2;
          } else if(route.name === 'Search'){
            iconName = focused ? "search" : "ios-search-outline";
          }

          return <Ionic name={iconName} size={size} color={colour}/>
        }
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bottom" component={bottomTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({});