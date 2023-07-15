import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import {YouTubePlayer} from 'react-native-youtube-iframe';
import axios from 'axios';  

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const videoRef = useRef(null);
  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20:0,
          color: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding:mute ? 20:0
        }}
      />
      <View>
        <View>
          <TouchableOpacity>
            <View style={{width: 32, height: 32, borderRadius: 100, backgroundColor: 'white'}}>
              <Image source={item.postProfile} style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default SingleReel;
