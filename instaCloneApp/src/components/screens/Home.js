import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <View >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, fontWeight: '500'}}>
          Instagram
        </Text>
      </View>
    </View>
  )
}

export default Home