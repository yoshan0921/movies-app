import React from 'react';
import {Text, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParam} from '../types/StackParams';
import {Content} from '../types/Content';
import {IMAGE_BASE_URL} from '../constants/Api';

export const ContentList: React.FC<{items: Content[]; contentType: string}> = ({
  items,
  contentType,
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
              <Text className="font-bold">{item.title ?? item.name}</Text>
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date}</Text>
              <TouchableOpacity
                className="bg-cyan-500 py-2.5 rounded w-full"
                onPress={() =>
                  navigation.navigate('Detail', {
                    contentId: item.id,
                    contentType: contentType === 'multi' ? item.media_type : contentType,
                  })
                }>
                <Text className="text-white text-center">More Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  movieItem: {flexDirection: 'row', paddingBottom: 16, paddingHorizontal: 8},
  poster: {width: 100, height: 140, marginRight: 16},
  movieInfo: {
    flex: 1,
    gap: 8,
    alignItems: 'flex-start',
  },
});
