import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {TVShowQueryDropDown} from '../components/TVShowQueryDropDown';
import {ContentList} from '../components/ContentList';
import {TVShowQueryType} from '../types/ContentType';
import {Loading} from '../components/Loading';

export const TVShowsScreen = () => {
  const [listType, setListType] = useState<TVShowQueryType>('popularTVShows');
  const {items, loading} = useFetchContent(listType);
  console.log(loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchConditionArea}>
        <TVShowQueryDropDown onValueChange={setListType} currentValue={listType} />
      </View>
      <ContentList contentType="tv" items={items} />
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
