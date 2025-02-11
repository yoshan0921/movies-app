import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';
import {IMAGE_BASE_URL} from '../constants/Api';

type Props = {
  content: Content;
  contentType: ContentType;
};

export const ContentDetail = ({content, contentType}: Props) => {
  return (
    <ScrollView className="px-5">
      <View className="flex-1 gap-10 flex-col items-center">
        <Text className="font-bold text-2xl">
          {contentType === 'movie' ? content.title : content.name}
        </Text>
        {content.poster_path ? (
          <Image
            className="w-3/4 aspect-square"
            source={{uri: `${IMAGE_BASE_URL}${content?.poster_path}`}}
          />
        ) : (
          <Text>No image</Text>
        )}
        <Text>{content.overview ?? 'No overview'}</Text>
        <Text>
          Popularity: {content.popularity ?? 'NA'}
          {contentType === 'movie'
            ? ` | Release Date: ${content.release_date ?? 'NA'}`
            : ` | First Air Date: ${content.first_air_date ?? 'NA'}`}
        </Text>
      </View>
    </ScrollView>
  );
};
