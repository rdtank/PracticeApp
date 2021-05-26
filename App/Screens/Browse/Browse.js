import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Browse = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#3b3d40',
      }}>
      <LinearGradient
        colors={['#3b3d40', '#050607']}
        start={{x: 0.0, y: 0.0}}
        style={{flex: 1}}>
        <Text>Browse</Text>
      </LinearGradient>
    </View>
  );
};

export default Browse;
