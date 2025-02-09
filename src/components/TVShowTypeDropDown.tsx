import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from '../../components/ui/select';
import {ChevronDownIcon} from '../../components/ui/icon';
import {TVShowQueryType} from '../types/ContentQueryType';

type Props = {
  onValueChange: (value: TVShowQueryType) => void;
};

export const TVShowTypeDropDown = ({onValueChange}: Props) => {
  const [selectedValue, setSelectedValue] = useState<TVShowQueryType>('popularTVShows');
  console.log('selectedValue', selectedValue);

  return (
    <Select
      style={styles.container}
      initialLabel="Popular"
      defaultValue={selectedValue}
      onValueChange={value => {
        setSelectedValue(value as TVShowQueryType);
        onValueChange(value as TVShowQueryType);
      }}>
      <SelectTrigger style={styles.selectTrigger}>
        <SelectInput />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent style={styles.selectContainer}>
          <SelectDragIndicatorWrapper style={styles.selectDragIndicatorContainer}>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="Airing Today" value="airingTodayTVShows" />
          <SelectItem label="On The Air" value="onTheAirTVShows" />
          <SelectItem label="Popular" value="popularTVShows" />
          <SelectItem label="Top Rated" value="topRatedTVShows" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  selectTrigger: {justifyContent: 'space-between', width: '70%', margin: 'auto'},
  selectDragIndicatorContainer: {marginVertical: 16},
  selectContainer: {paddingBottom: 32},
});
