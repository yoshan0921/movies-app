import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {TVShowTypeDropDown} from '../components/TVShowTypeDropDown';
import {ContentList} from '../components/ContentList';
import {TVShowQueryType} from '../types/ContentQueryType';

export const TVShowsScreen = () => {
  const [listType, setListType] = useState<TVShowQueryType>('popularTVShows');
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
      <TVShowTypeDropDown onValueChange={setListType} />
      <ContentList contentType="tv" items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  movieItem: {flexDirection: 'row', marginBottom: 16},
  poster: {width: 100, height: 120, marginRight: 16},
  movieInfo: {
    flex: 1,
    gap: 5,
    fontSize: 18,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    flexShrink: 1,
  },
  title: {fontWeight: 'bold'},
  detailButton: {
    backgroundColor: '#22B5D4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
