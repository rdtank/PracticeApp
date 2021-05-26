import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

const data = [
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/01/23/21/33/blue-250770__340.jpg',
    title: 'something',
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/01/23/21/35/pink-250777__340.jpg',
    title: 'something two',
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/11/22/17/25/wooden-215877__340.jpg',
    title: 'something three',
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/01/31/19/53/wood-5968400__340.jpg',
    title: 'something four',
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2012/02/23/09/09/backgrounds-15913__340.jpg',
    title: 'something five',
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299__340.jpg',
    title: 'something six',
  },
];

const Category = () => {
  return (
    <FlatList
      style={{margin: 10, flexGrow: 0.03}}
      data={data}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity activeOpacity={0.5}>
            <Card
              containerStyle={{
                borderWidth: 3,
                padding: 0,
                backgroundColor: '#c65f63',
                maxHeight: 170,
                borderRadius: 5,
              }}>
              <Card.Image
                resizeMode="cover"
                style={{
                  width: 160,
                  height: 160,
                  maxHeight: 160,
                  maxWidth: 160,
                }}
                source={{uri: item.imageUrl}}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: '40%',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  {item.title}
                </Text>
              </Card.Image>
            </Card>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Category;
