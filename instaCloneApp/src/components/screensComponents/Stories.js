import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"


const Stories = () => {
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      Image: require('../../storage/images/userProfile.jpg'),
    },
  ];



  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
      {
        storyInfo.map((data, index) => {
          return(
            <TouchableOpacity key={index}>
              <View>
                {
                  data.id == 1 ?
                  (
                    <View>
                      <Entypo name='circle-with-plus' style={{fontSize: 20, color:"#405de6", backgroundColor: 'white', borderRadius: 1000}}/>
                    </View>
                  ) :null
                }
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}
export default Stories