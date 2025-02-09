import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {usePopularMovieList} from '../hooks/useContentList';
import {ContentTypeDropDown} from '../components/ContentTypeDropDown';
import {ContentList} from '../components/ContentList';
export const MoviesScreen = () => {
  const {items, loading} = usePopularMovieList();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <ContentTypeDropDown />
      <ContentList contentType="movie" items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
