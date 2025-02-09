import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {MovieTypeDropDown} from '../components/MovieTypeDropDown';
import {ContentList} from '../components/ContentList';
import {MovieQueryType} from '../types/ContentQueryType';

export const MoviesScreen = () => {
  const [listType, setListType] = useState<MovieQueryType>('popularMovies');
  const {items, loading} = useFetchContent(listType);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <MovieTypeDropDown onValueChange={setListType} />
      <ContentList contentType="movie" items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
