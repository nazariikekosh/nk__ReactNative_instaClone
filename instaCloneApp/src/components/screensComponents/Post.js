import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'RED',
      postPersonImage: require('../../storage/images/userProfile.jpg'),
      postImage: require('../../storage/images/postRedProfile.jpg'),
      likes: 765,
      isLiked: false,
    },
  ];
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{fontSize: 20}} />
            </View>
            <View style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 400}}
              />
            </View>
            <TouchableOpacity>
                <AntDesign name={like ? 'heart' : 'hearto'} size={20} style={{paddingRight: 10, fontSize: 20, color: like ? 'red' : 'black'}} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
