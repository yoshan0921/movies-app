import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Button, ButtonText, ButtonIcon} from '@/components/ui/button';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParam} from '../types/StackParams';
import {Content} from '../types/Content';
import {ContentType} from '../types/ContentType';
import {IMAGE_BASE_URL} from '../constants/Api';
import {ArrowLeftIcon} from '../../components/ui/icon';
import {ArrowRightIcon} from '../../components/ui/icon';

type Props = {
  items: Content[];
  contentType: ContentType;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
};

export const ContentList = ({items, contentType, page, nextPage, prevPage}: Props) => {
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
              <Button
                className="bg-cyan-500 w-full"
                action="custom"
                onPress={() =>
                  navigation.navigate('Detail', {
                    contentId: item.id,
                    contentType: contentType === 'multi' ? item.media_type : contentType,
                  })
                }>
                <ButtonText>More Details</ButtonText>
              </Button>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View className="flex-row gap-4 justify-center pb-8">
            {page > 1 && (
              <Button variant="link" onPress={prevPage}>
                <ButtonIcon className="mr-3" as={ArrowLeftIcon} />
                <ButtonText>Prev</ButtonText>
              </Button>
            )}
            <Button variant="link" onPress={nextPage}>
              <ButtonText>Next</ButtonText>
              <ButtonIcon className="mr-3" as={ArrowRightIcon} />
            </Button>
          </View>
        }
      />
    </View>
  );
};
