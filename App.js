import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './App/Screens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './App/Screens/Search/Search';
import Profile from './App/Screens/Profile/Profile';
import Colors from './App/Utility/Colors';
import Browse from './App/Screens/Browse/Browse';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{marginBottom: -15, justifyContent: 'center'}}
        screenOptions={({route, navigation}) => {
          return {tabBarLabel: navigation.isFocused() ? route.name : ''};
        }}
        initialRouteName="Home"
        activeColor="white"
        barStyle={{backgroundColor: Colors.main_bg}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home-sharp" color="white" size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Ionicons name="search-sharp" color="white" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Browse"
          component={Browse}
          options={{
            tabBarIcon: () => (
              <Ionicons name="compass-sharp" color="white" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="My Library"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person-sharp" color="white" size={23} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
