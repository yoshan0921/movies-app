import React, {useState} from 'react';
import {View} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {MovieQueryDropDown} from '../components/MovieQueryDropDown';
import {ContentList} from '../components/ContentList';
import {MovieQueryType} from '../types/ContentType';
import {Loading} from '../components/Loading';

export const MoviesScreen = () => {
  const [listType, setListType] = useState<MovieQueryType>('popularMovies');
  const {items, loading} = useFetchContent(listType);
  console.log('loading', loading);

  return (
    <View className="flex-1 gap-8 bg-white pt-8">
      <View className="gap-4 bg-white px-10">
        <MovieQueryDropDown onValueChange={setListType} currentValue={listType} />
      </View>
      {loading ? <Loading /> : <ContentList contentType="movie" items={items} />}
    </View>
  );
};
