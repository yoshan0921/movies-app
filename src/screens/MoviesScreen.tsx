import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {MovieQueryDropDown} from '../components/MovieQueryDropDown';
import {ContentList} from '../components/ContentList';
import {MovieQueryType} from '../types/ContentType';
import {Loading} from '../components/Loading';

export const MoviesScreen = () => {
  const [listType, setListType] = useState<MovieQueryType>('popularMovies');
  const {items, loading} = useFetchContent(listType);
  console.log('loading', loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchConditionArea}>
        <MovieQueryDropDown onValueChange={setListType} currentValue={listType} />
      </View>
      <ContentList contentType="movie" items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: '#fff',
    paddingTop: 32,
  },
  searchConditionArea: {
    gap: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
});
