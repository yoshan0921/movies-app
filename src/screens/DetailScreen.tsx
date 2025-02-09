import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, StatusBar} from 'react-native';
import {StackParam} from '../types/StackParams';
import {RouteProp, useRoute, useNavigation, useFocusEffect} from '@react-navigation/native';
import {useContentDetail} from '../hooks/useContentDetail';
import {ContentDetail} from '../components/ContentDetail';

type DetailScreenRouteProp = RouteProp<StackParam, 'Detail'>;

export const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const navigation = useNavigation();
  const contentType = route.params.contentType;
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
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  if (!content) {
    return (
      <View style={styles.noContent}>
        <Text>Content not found</Text>
      </View>
    );
  }

  return <ContentDetail content={content} />;
};

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  noContent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
