import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useFetchContent} from '../hooks/useContentList';
import {TVShowQueryDropDown} from '../components/TVShowQueryDropDown';
import {ContentList} from '../components/ContentList';
import {TVShowQueryType} from '../types/ContentType';
import {Loading} from '../components/Loading';

export const TVShowsScreen = () => {
  const [listType, setListType] = useState<TVShowQueryType>('popularTVShows');
  const [page, setPage] = useState(1);
  const {items, loading} = useFetchContent(listType, page);

  useEffect(() => {
    setPage(1);
  }, [listType]);

  const handleLoadNext = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleLoadPrev = () => {
    setPage(prevPage => prevPage - 1);
  };

  return (
    <View className="flex-1 gap-8 bg-white pt-8">
      <View className="gap-4 bg-white px-10">
        <TVShowQueryDropDown onValueChange={setListType} currentValue={listType} />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <ContentList
          contentType="tv"
          items={items}
          page={page}
          nextPage={handleLoadNext}
          prevPage={handleLoadPrev}
        />
      )}
    </View>
  );
};
