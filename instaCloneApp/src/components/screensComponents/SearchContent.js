import { View, Text } from 'react-native'
import React from 'react'

const SearchContent = () => {

    const searchData = [
        {
            id: 0,
            images: [
                require('../../storage/images/postRedProfile.jpg'),
                require('../../storage/images/search1.jpg'),
                require('../../storage/images/search2.jpg'),
                require('../../storage/images/search3.jpg'),
                require('../../storage/images/search4.jpg'),
                require('../../storage/images/search5.jpg'),

            ]
        },
        {
            id: 1,
            images: [
                require('../../storage/images/search6.jpg'),
                require('../../storage/images/search7.jpg'),
                require('../../storage/images/search8.jpg'),
                require('../../storage/images/search9.jpg'),
                require('../../storage/images/search10.jpg'),
                require('../../storage/images/search11.jpg'),
            ]
        },
        {
            id: 2,
            images: [
                require('../../storage/images/search12.jpg'),
                require('../../storage/images/search13.jpg'),
                require('../../storage/images/search14.jpg'),
            ]
        }
    ]

  return (
    <View>
      <Text>Content</Text>
    </View>
  )
}

export default SearchContent