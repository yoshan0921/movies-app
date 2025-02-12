import React from 'react';
import {Text} from 'react-native';
import {ContentType} from '../types/ContentType';

type Props = {
  contentType: ContentType;
  mediaType: ContentType;
  releaseDate: string | null;
  firstAirDate: string | null;
};

export const ReleaseDate: React.FC<Props> = ({
  contentType,
  mediaType,
  releaseDate,
  firstAirDate,
}) => {
  if (contentType === 'person' || mediaType === 'person') {
    return <Text>NA</Text>;
  } else if (contentType === 'movie' || mediaType === 'movie') {
    return <Text>Release Date: {releaseDate ?? 'NA'}</Text>;
  } else if (contentType === 'tv' || mediaType === 'tv') {
    return <Text>First Air Date: {firstAirDate ?? 'NA'}</Text>;
  }
  return null;
};
