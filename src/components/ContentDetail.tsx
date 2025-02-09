import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Content} from '../types/Content';
import {IMAGE_BASE_URL} from '../constants/Api';

type Props = {
  content: Content;
};

export const ContentDetail = ({content}: Props) => {
  return (
    <View style={styles.movieItem}>
      <Text style={styles.title}>{content.title ?? content.name}</Text>
      <Image source={{uri: `${IMAGE_BASE_URL}${content?.poster_path}`}} style={styles.poster} />
      <Text>{content.overview}</Text>
      <Text>
        Popularity: {content.popularity} | Release Date: {content.release_date}
      </Text>
    </View>
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
