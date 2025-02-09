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
import {MovieQueryType} from '../types/ContentQueryType';

type Props = {
  onValueChange: (value: MovieQueryType) => void;
};

export const MovieTypeDropDown = ({onValueChange}: Props) => {
  const [selectedValue, setSelectedValue] = useState<MovieQueryType>('popularMovies');
  console.log('selectedValue', selectedValue);

  return (
    <Select
      style={styles.container}
      initialLabel="Popular"
      defaultValue={selectedValue}
      onValueChange={value => {
        setSelectedValue(value as MovieQueryType);
        onValueChange(value as MovieQueryType);
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
          <SelectItem label="Now Playing" value="nowPlayingMovies" />
          <SelectItem label="Popular" value="popularMovies" />
          <SelectItem label="Top Rated" value="topRatedMovies" />
          <SelectItem label="Upcoming" value="upcomingMovies" />
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
