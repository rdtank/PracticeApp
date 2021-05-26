import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';

const data = [
  {
    imageUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/71EodKggiQL.png',
    title: 'something',
  },
  {
    imageUrl:
      'https://besthqwallpapers.com/Uploads/3-12-2020/147986/thumb-music-neon-icon-4k-violet-background-neon-symbols-music.jpg',
    title: 'something two',
  },
  {
    imageUrl:
      'https://i.pinimg.com/originals/40/a8/65/40a8655afb266307f2e3c0858f6c4723.jpg',
    title: 'something three',
  },
  {
    imageUrl:
      'https://cdn0.iconfinder.com/data/icons/commenly-needed/400/4-18-512.png',
    title: 'something four',
  },
  {
    imageUrl:
      'https://image.freepik.com/free-vector/music-neon-sign-style-text-with-headphone-icon_44523-933.jpg',
    title: 'something five',
  },
  {
    imageUrl:
      'http://clipart-library.com/new_gallery/2-21591_pi-music-player-icon-1-pi-music-player.png',
    title: 'something six',
  },
];

const Tranding = () => {
  return (
    <FlatList
      style={{marginHorizontal: 20}}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      numColumns={3}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity activeOpacity={0.5}>
            <View style={{marginTop: 10}}>
              <Image
                style={{width: 80, height: 80, maxHeight: 80, maxWidth: 80}}
                source={{uri: item.imageUrl}}
              />
            </View>
            {/* <Card
              containerStyle={{
                padding: 0,
                maxHeight: 90,
              }}>
              <Card.Image
                resizeMode="cover"
                style={{
                  width: 80,
                  height: 80,
                  maxHeight: 80,
                  maxWidth: 80,
                }}
                source={{uri: item.imageUrl}}></Card.Image>
            </Card> */}
            <Text
              numberOfLines={1}
              style={{
                textAlign: 'center',
                width: 80,
                marginVertical: 5,
                fontSize: 16,
                color: 'white',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Tranding;
