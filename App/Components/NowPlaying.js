import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {Avatar} from 'react-native-paper';

const NowPlaying = () => {
  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.text}>Now Playing...</Text>
            <Text style={[styles.text, {fontSize: 15}]}>Album</Text>
          </View>
          <View style={{marginRight: 10}}>
            <Avatar.Image
              size={40}
              source={{
                uri:
                  'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default NowPlaying;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    // padding: 10,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: 'white', //'#bebdcc',
  },
  text: {
    marginLeft: 5,
    fontSize: 17,
    letterSpacing: 1.5,
    marginBottom: 3,
  },
});
