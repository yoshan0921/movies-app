import React, {useLayoutEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {StackParam} from '../types/StackParams';
import {RouteProp, useRoute, useNavigation, useFocusEffect} from '@react-navigation/native';
import {useContentDetail} from '../hooks/useContentDetail';
import {ContentDetail} from '../components/ContentDetail';
import {Loading} from '../components/Loading';

type DetailScreenRouteProp = RouteProp<StackParam, 'Detail'>;

export const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const navigation = useNavigation();
  const contentType = route.params.contentType ?? 'movie';
  const contentId = route.params.contentId ?? 0;
  const {content, loading} = useContentDetail(contentType, contentId);

  useLayoutEffect(() => {
    if (contentType === 'movie' && content?.title) {
      navigation.setOptions({title: content?.title});
    } else if (contentType === 'tv' && content?.name) {
      navigation.setOptions({title: content?.name});
    }
  }, [navigation, contentType, content]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      return () => StatusBar.setBarStyle('light-content');
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  if (!content) {
    return (
      <View className="flex-1 gap-8 bg-white py-12">
        <Text>Content not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 gap-8 bg-white py-12">
      <ContentDetail content={content} />
    </View>
  );
};
