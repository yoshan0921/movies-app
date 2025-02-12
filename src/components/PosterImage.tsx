import React from 'react';
import {Image} from 'react-native';
import {ContentType} from '../types/ContentType';
import {IMAGE_BASE_URL} from '../constants/Api';

type Props = {
  contentType: ContentType;
  mediaType: ContentType;
  posterPath: string | null;
  profilePath: string | null;
  className: string;
};

export const PosterImage = ({
  contentType,
  mediaType,
  posterPath,
  profilePath,
  className,
}: Props) => {
  const getImageUri = () => {
    if (contentType === 'person' || mediaType === 'person') {
      return profilePath;
    }
    return posterPath;
  };
  const imageUri = IMAGE_BASE_URL + getImageUri();

  return <Image className={className} source={{uri: imageUri}} />;
};
