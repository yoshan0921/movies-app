import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Content} from '../types/Content';
import {IMAGE_BASE_URL} from '../constants/Api';

type Props = {
  content: Content;
};

export const ContentDetail = ({content}: Props) => {
  return (
    <ScrollView className="px-5">
      <View className="flex-1 gap-10 flex-col items-center">
        <Text className="font-bold text-2xl">{content.title ?? content.name}</Text>
        <Image
          className="w-3/4 aspect-square"
          source={{uri: `${IMAGE_BASE_URL}${content?.poster_path}`}}
        />
        <Text>{content.overview ?? 'NA'}</Text>
        <Text>
          Popularity: {content.popularity ?? 'NA'} | Release Date: {content.release_date ?? 'NA'}
        </Text>
      </View>
    </ScrollView>
  );
};
