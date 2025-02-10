import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {Content} from '../types/Content';
import {IMAGE_BASE_URL} from '../constants/Api';

type Props = {
  content: Content;
};

export const ContentDetail = ({content}: Props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>{content.title ?? content.name}</Text>
        <Image source={{uri: `${IMAGE_BASE_URL}${content?.poster_path}`}} style={styles.poster} />
        <Text>{content.overview}</Text>
        <Text>
          Popularity: {content.popularity} | Release Date: {content.release_date}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, gap: 40, flexDirection: 'column', alignItems: 'center'},
  scrollView: {paddingHorizontal: 20},
  title: {fontWeight: 'bold', fontSize: 24},
  poster: {width: '75%', aspectRatio: 1 / 1, marginRight: 16},
});
