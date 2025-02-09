import React from 'react';
import {Text, View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {StackParam} from '../types/StackParams';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useContentDetail} from '../hooks/useContentDetail';

type DetailScreenRouteProp = RouteProp<StackParam, 'Detail'>;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const contentType = route.params.contentType;
  const contentId = route.params.contentId ?? 0;
  const {content, loading} = useContentDetail(contentType, contentId);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  // Separate the view as component
  return content ? (
    <View style={styles.movieItem}>
      <Text style={styles.title}>{content.title ?? content.name}</Text>
      <Image source={{uri: `${IMAGE_BASE_URL}${content?.poster_path}`}} style={styles.poster} />
      <Text>{content.overview}</Text>
      <Text>
        Popularity: {content?.popularity} | Release Date: {content?.release_date}
      </Text>
    </View>
  ) : (
    <Text>Movie not found</Text>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  movieItem: {
    flex: 1,
    gap: 40,
    flexDirection: 'column',
    margin: 40,
    alignItems: 'center',
  },
  poster: {width: '90%', aspectRatio: 1 / 1, marginRight: 16},
  title: {fontWeight: 'bold', fontSize: 24},
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
