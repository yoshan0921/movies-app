import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParam} from '../types/StackParams';
import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';
import {IMAGE_BASE_URL} from '../constants/Api';

export const ContentList: React.FC<{items: Content[]; contentType: ContentType}> = ({
  items,
  contentType,
}) => {
  const navigation = useNavigation<NavigationProp<StackParam>>();

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View className="flex-row pb-4 px-2">
            <Image
              className="w-24 h-36 mr-4"
              source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
            />
            <View className="flex-1 gap-2 items-start">
              <Text className="font-bold">{item.title ?? item.name}</Text>
              <Text>Popularity: {item.popularity ?? 'NA'}</Text>
              {contentType === 'multi' ? (
                item.media_type === 'movie' ? (
                  <Text>Release Date: {item.release_date ?? 'NA'}</Text>
                ) : (
                  <Text>First Air Date: {item.first_air_date ?? 'NA'}</Text>
                )
              ) : contentType === 'movie' ? (
                <Text>Release Date: {item.release_date ?? 'NA'}</Text>
              ) : (
                <Text>First Air Date: {item.first_air_date ?? 'NA'}</Text>
              )}
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
