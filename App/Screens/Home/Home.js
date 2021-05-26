import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HomeStyles';
import {ScrollView} from 'react-native';
import NowPlaying from '../../Components/NowPlaying';
import Category from '../../Components/Category';
import Tab from '../../Components/Tab';
import HeaderComp from '../../Components/HeaderComp';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <NowPlaying />
      <View style={styles.category}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
          Category
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: '500'}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <Category />
      <Tab />
    </View>
  );
};

export default Home;
