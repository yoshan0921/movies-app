import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#000000" />
      <Text>Loading results</Text>
    </View>
  );
};
