import React from 'react';
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
import {TVShowQueryType} from '../types/ContentType';

type Props = {
  onValueChange: (value: TVShowQueryType) => void;
  currentValue: TVShowQueryType;
};

export const TVShowQueryDropDown = ({onValueChange, currentValue}: Props) => {
  const TV_SHOW_SELECT_OPTIONS = [
    {label: 'Airing Today', value: 'airingTodayTVShows'},
    {label: 'On The Air', value: 'onTheAirTVShows'},
    {label: 'Popular', value: 'popularTVShows'},
    {label: 'Top Rated', value: 'topRatedTVShows'},
  ];

  const getTVShowLabelByValue = (value: string) => {
    const item = TV_SHOW_SELECT_OPTIONS.find(option => option.value === value);
    return item ? item.label : 'Unknown';
  };

  return (
    <Select
      initialLabel={getTVShowLabelByValue(currentValue)}
      defaultValue={currentValue}
      onValueChange={value => {
        onValueChange(value as TVShowQueryType);
      }}
      isFocused={true}>
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
  selectTrigger: {justifyContent: 'space-between'},
  selectDragIndicatorContainer: {marginVertical: 16},
  selectContainer: {paddingBottom: 32},
});
