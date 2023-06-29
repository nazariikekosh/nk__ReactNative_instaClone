import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
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
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, fontWeight: '500'}}>
          Instagram <Text style={{fontSize: 14}}>Red</Text>
        </Text>
        <Feather name='navigation' style={{ fontSize: 24 }} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  )
}

export default Home