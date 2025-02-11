import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useFetchContent} from '../hooks/useContentSearch';
import {ContentTypeDropDown} from '../components/ContentTypeDropDown';
import {ContentType} from '../types/ContentType';
import {SearchBox} from '../components/SearchBox';
import {ContentList} from '../components/ContentList';
import {Loading} from '../components/Loading';
import {SearchButton} from '../components/SearchButton';

export const SearchResultScreen = () => {
  const [inputKeyword, setInputKeyword] = useState('');
  const [inputContentType, setInputContentType] = useState<ContentType>('multi');
  const [keyword, setKeyword] = useState('');
  const [contentType, setContentType] = useState<ContentType>('multi');
  const {items, loading} = useFetchContent(contentType, keyword);
  const [hasSearched, setHasSearched] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    if (!inputKeyword.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setContentType(inputContentType);
    setKeyword(inputKeyword);
    setInputKeyword('');
    setHasSearched(true);
  };

  return (
    <View className="flex-1 gap-8 bg-white pt-8">
      <View className="gap-2 bg-white w-4/5 mx-auto">
        <Text>
          Search Movie/TV Show Name<Text className="text-red-500">*</Text>
        </Text>
        <SearchBox onChangeText={setInputKeyword} value={inputKeyword} isError={isError} />
        <Text>
          Choose Search Type<Text className="text-red-500">*</Text>
        </Text>
        <View className="flex-row gap-2">
          <View className="flex-1">
            <ContentTypeDropDown
              onValueChange={setInputContentType}
              currentValue={inputContentType}
            />
          </View>
          <SearchButton onPress={handleSearch} />
        </View>

        {!hasSearched ? (
          ''
        ) : isError ? (
          <Text className="text-red-500">Movie-TV show name is required</Text>
        ) : (
          <Text>
            {`Search result (Keyword=${keyword.toLocaleLowerCase()}, Type=${contentType.toLocaleLowerCase()})`}
          </Text>
        )}
      </View>

      {loading ? (
        <Loading />
      ) : items.length === 0 ? (
        <View className="flex-1 bg-white items-center pt-20">
          <Text className="font-bold text-xl">
            {hasSearched ? 'No results found' : 'Please initiate a search'}
          </Text>
        </View>
      ) : (
        <ContentList items={items} contentType={contentType} />
      )}
    </View>
  );
};
