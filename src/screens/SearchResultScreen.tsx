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

  const handleSearch = () => {
    if (!inputKeyword.trim()) {
      alert('Please enter a search keyword');
      return;
    }
    setContentType(inputContentType);
    setKeyword(inputKeyword);
    setInputKeyword('');
    setHasSearched(true);
  };

  return (
    <View className="flex-1 gap-8 bg-white pt-8">
      <View className="gap-2 bg-white w-4/5 mx-auto">
        <Text>Search Movie/TV Show Name*</Text>
        <SearchBox onChangeText={setInputKeyword} value={inputKeyword} />
        <Text>Choose Search Type*</Text>
        <View className="flex-row gap-2">
          <View className="flex-1">
            <ContentTypeDropDown
              onValueChange={setInputContentType}
              currentValue={inputContentType}
            />
          </View>
          <SearchButton onPress={handleSearch} />
        </View>
        <Text>
          Search result (Keyword={keyword}, Type={contentType})
        </Text>
      </View>

      {loading ? (
        <Loading />
      ) : items.length === 0 ? (
        <View className="flex-1 bg-white justify-center items-center">
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 32,
//     backgroundColor: '#fff',
//     paddingTop: 32,
//   },
//   searchConditionArea: {
//     gap: 8,
//     backgroundColor: '#fff',
//     width: '80%',
//     marginHorizontal: 'auto',
//   },
//   searchResultArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchResultAreaText: {
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// });
