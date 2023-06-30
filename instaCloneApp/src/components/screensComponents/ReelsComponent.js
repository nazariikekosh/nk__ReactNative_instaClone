import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { videoData } from './DataBase';
import SingleReel from './SingleReel';

const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChandleIndexValue =({index}) =>{
        setCurrentIndex(index);
    }

  return (
    <SwiperFlatList 
    onChangeIndex={handleChandleIndexValue}
    data={videoData}
    renderItem={(item, index)=>
    <SingleReel item={item} index={index} currentIndex={currentIndex}/>} />
  )
}

export default ReelsComponent