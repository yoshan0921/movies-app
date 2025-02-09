import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParam} from '../types/StackParams';
import {Content} from '../types/Content';
import {IMAGE_BASE_URL} from '../constants/Api';

export const ContentList: React.FC<{contentType: string; items: Content[]}> = ({
  contentType,
  items,
}) => {
  const navigation = useNavigation<NavigationProp<StackParam>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieItem}>
            <Image source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date}</Text>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() =>
                  navigation.navigate('Detail', {contentType: contentType, contentId: item.id})
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
  container: {flex: 1, backgroundColor: '#fff', paddingBottom: 16},
  movieItem: {flexDirection: 'row', paddingTop: 16, paddingHorizontal: 16},
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
