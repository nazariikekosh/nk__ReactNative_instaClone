import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';

const FullScreenImage = ({ image, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onClose}
      >
        <Image
          source={image}
          style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
        />
      </TouchableOpacity>
    </Modal>
  );
};

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
      ],
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
      ],
    },
    {
      id: 2,
      images: [
        require('../../storage/images/search12.jpg'),
        require('../../storage/images/search13.jpg'),
        require('../../storage/images/search14.jpg'),
      ],
    },
  ];

  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <React.Fragment key={data.id}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={{ paddingBottom: 2 }}
                      onPress={() => setFullScreenImage(imageData)}
                    >
                      <Image
                        source={imageData}
                        style={{ width: 129, height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 261,
                    justifyContent: 'space-between',
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={{ paddingBottom: 2 }}
                        onPress={() => setFullScreenImage(imageData)}
                      >
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={{ marginLeft: 2 }}
                  onPress={() => setFullScreenImage(data.images[5])}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: 129, height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableOpacity
                  style={{ paddingRight: 2 }}
                  onPress={() => setFullScreenImage(data.images[2])}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: 260, height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 130,
                    justifyContent: 'space-between',
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={{ paddingBottom: 2 }}
                        onPress={() => setFullScreenImage(imageData)}
                      >
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </React.Fragment>
        );
      })}
      {fullScreenImage && (
        <FullScreenImage
          image={fullScreenImage}
          onClose={() => setFullScreenImage(null)}
        />
      )}
    </View>
  );
};

export default SearchContent;
