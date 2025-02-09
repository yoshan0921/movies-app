import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParam} from '../types/StackParams';
import {usePopularTVShowList} from '../hooks/useContentList';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const TVShowsScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParam>>();
  const {items, loading} = usePopularTVShowList();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieItem}>
            <Image source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date}</Text>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() =>
                  navigation.navigate('Detail', {contentType: 'tv', contentId: item.id})
                }>
                <Text style={styles.buttonText}>More Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
