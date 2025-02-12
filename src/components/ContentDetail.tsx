import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';
import {ReleaseDate} from './ReleaseDate';
import {PosterImage} from './PosterImage';

type Props = {
  content: Content;
  contentType: ContentType;
};

export const ContentDetail = ({content, contentType}: Props) => {
  return (
    <ScrollView className="px-5">
      <View className="flex-1 gap-10 flex-col items-center">
        <Text className="font-bold text-2xl">{content.title ? content.title : content.name}</Text>
        <PosterImage
          contentType={contentType}
          mediaType={content.media_type}
          posterPath={content.poster_path ?? null}
          profilePath={content.profile_path ?? null}
          className="w-3/4 aspect-square"
        />
        <Text>
          {content.overview
            ? content.overview
            : content.biography
              ? content.biography
              : 'No description available'}
        </Text>
        <Text>
          Popularity: {content.popularity ?? 'NA'} |{' '}
          <ReleaseDate
            contentType={contentType}
            mediaType={content.media_type}
            releaseDate={content.release_date ?? null}
            firstAirDate={content.first_air_date ?? null}
          />
        </Text>
      </View>
    </ScrollView>
  );
};
