import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

  const handleSearch = () => {
    if (!inputKeyword.trim()) {
      alert('Please enter a search keyword');
      return;
    }
    setContentType(inputContentType);
    setKeyword(inputKeyword);
    setInputKeyword('');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchConditionArea}>
        <Text>Search Movie/TV Show Name*</Text>
        <SearchBox onChangeText={setInputKeyword} value={inputKeyword} />
        <Text>Choose Search Type*</Text>
        <View style={{flexDirection: 'row', gap: 8}}>
          <View style={{flex: 1}}>
            <ContentTypeDropDown
              onValueChange={setInputContentType}
              currentValue={inputContentType}
            />
          </View>
          <SearchButton onPress={handleSearch} />
        </View>
        <Text>
          Search by Keyword={keyword}, Type={contentType}
        </Text>
      </View>

      {items.length === 0 && (
        <View style={styles.searchResultArea}>
          <Text style={styles.searchResultAreaText}>Please initiate a search</Text>
        </View>
      )}
      <ContentList items={items} contentType="movie" />
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
    gap: 8,
    backgroundColor: '#fff',
    width: '80%',
    marginHorizontal: 'auto',
  },
  searchResultArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchResultAreaText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
