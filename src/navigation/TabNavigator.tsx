import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MoviesScreen} from '../screens/MoviesScreen';
import {TVShowsScreen} from '../screens/TVShowsScreen';
import {SearchResultScreen} from '../screens/SearchResultScreen';

const TopTabs = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, padding: 0, margin: 2},
      }}
      style={styles.container}>
      <TopTabs.Screen name="Movies" component={MoviesScreen} />
      <TopTabs.Screen name="Search Results" component={SearchResultScreen} />
      <TopTabs.Screen name="TV Shows" component={TVShowsScreen} />
    </TopTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
