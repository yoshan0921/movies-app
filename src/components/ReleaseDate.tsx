import React from 'react';
import {Text} from 'react-native';
import {ContentType} from '../types/ContentType';

type Props = {
  contentType: ContentType;
  mediaType: ContentType;
  releaseDate: string | null;
  firstAirDate: string | null;
};

export const ReleaseDate = ({contentType, mediaType, releaseDate, firstAirDate}: Props) => {
  if (contentType === 'movie' || mediaType === 'movie') {
    return <Text>Release Date: {releaseDate ?? 'NA'}</Text>;
  } else if (contentType === 'tv' || mediaType === 'tv') {
    return <Text>First Air Date: {firstAirDate ?? 'NA'}</Text>;
  } else if (contentType === 'person' || mediaType === 'person') {
    return <Text>NA</Text>;
  }
  return null;
};
