import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Tranding from './Tabs/Tranding';
import Recently from './Tabs/Recently';
import New from './Tabs/New';
import Artist from './Tabs/Artist';
import Profile from '../Screens/Profile/Profile';

const Tab = () => {
  const layout = useWindowDimensions(0);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tranding', title: 'Tranding'},
    {key: 'recently', title: 'Recently'},
    {key: 'new', title: 'New'},
    {key: 'artist', title: 'Artist'},
  ]);

  const renderScene = SceneMap({
    tranding: Tranding,
    recently: Recently,
    new: New,
    artist: Artist,
  });

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          {...props}
          tabStyle={{width: 'auto'}}
          labelStyle={{
            textTransform: 'capitalize',
            letterSpacing: 1,
            fontWeight: 'bold',
          }}
          indicatorStyle={{backgroundColor: '#c72c41', marginVertical: 5}}
          style={{
            backgroundColor: Colors.main_bg,
            marginHorizontal: 20,
          }}
        />
      )}
      style={{backgroundColor: Colors.main_bg}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Tab;
