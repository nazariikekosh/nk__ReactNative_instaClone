import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Stories from '../../components/screensComponents/Stories';
import Post from '../screensComponents/Post'


const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
      }}>
        <TouchableOpacity>
          <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, fontWeight: '500'}}>
          Instagram <Text style={{fontSize: 14, color: 'red'}}>Red</Text>
        </Text>
        <TouchableOpacity>
        <Feather name='navigation' style={{ fontSize: 24 }} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic name="ios-reload-circle-sharp" style={{ fontSize: 60, opacity: 0.2 }} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home