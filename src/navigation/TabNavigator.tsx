import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ListScreen} from '../screens/ListScreen';
import {SearchResultScreen} from '../screens/SearchResultScreen';

const TopTabs = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, padding: 0, margin: 2},
        tabBarIndicatorStyle: {backgroundColor: 'black', height: 3},
      }}
      style={styles.container}>
      <TopTabs.Screen
        name="Movies"
        children={() => <ListScreen contentType="movie" initialQueryType="popularMovies" />}
      />
      <TopTabs.Screen name="Search Results" component={SearchResultScreen} />
      <TopTabs.Screen
        name="TV Shows"
        children={() => <ListScreen contentType="tv" initialQueryType="popularTVShows" />}
      />
    </TopTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
