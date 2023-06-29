import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../storage/images/userProfile.jpg'),
    },
    {
      id: 0,
      name: 'Ihor Lialiuk',
      image: require('../../storage/images/lialiuk.jpg'),
    },
    {
      id: 0,
      name: 'Iryna Pec',
      image: require('../../storage/images/iryna.jpg'),
    },
    {
      id: 0,
      name: 'Marija Pinchak',
      image: require('../../storage/images/marijaPinchak.jpg'),
    },
    {
      id: 0,
      name: ' Webstudio Red',
      image: require('../../storage/images/red.jpg'),
    },
    {
      id: 0,
      name: 'Milena Didukh',
      image: require('../../storage/images/milena.jpg'),
    },
    {
      id: 0,
      name: 'Sonya Designer',
      image: require('../../storage/images/sonya.jpg'),
    },
    {
      id: 0,
      name: 'Vasul Melco',
      image: require('../../storage/images/vasul.jpg'),
    },
    {
      id: 0,
      name: 'Ostap',
      image: require('../../storage/images/Ostap.jpg'),
    },
    {
      id: 0,
      name: 'Rostyslav Mychats',
      image: require('../../storage/images/rostyslav.jpg'),
    },
    {
      id: 0,
      name: 'Pasha Zagrai',
      image: require('../../storage/images/pasha.jpg'),
    },
    {
      id: 0,
      name: 'Nazarii Kekosh',
      image: require('../../storage/images/nazar.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.push('Status', {
              name: data.name,
              image: data.image
            })}>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'red',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Stories;
