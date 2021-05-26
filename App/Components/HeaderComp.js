import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

const HeaderComp = () => {
  const [currentTime, setcurrentTime] = useState();
  var isFocused = useIsFocused();

  useEffect(() => {
    let hour = new Date().getHours();
    setcurrentTime(hour);
  }, [isFocused]);

  return (
    <Header
      containerStyle={{
        marginHorizontal: 12,
        borderBottomWidth: 0,
        // marginVertical: 10,
      }}
      backgroundColor={Colors.main_bg}
      centerContainerStyle={{display: 'none'}}
      rightComponent={
        <View>
          <TouchableOpacity>
            <Feather name="list" size={20} color="white" />
          </TouchableOpacity>
        </View>
      }
      leftComponent={
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>
            {currentTime < 12
              ? 'Good Morning'
              : currentTime >= 12 && currentTime <= 17
              ? 'Good Afternoon'
              : 'Good Evening'}
          </Text>
        </View>
      }
    />
  );
};

export default HeaderComp;
