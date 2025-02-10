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
import {MovieQueryType} from '../types/ContentType';

type Props = {
  onValueChange: (value: MovieQueryType) => void;
};

export const MovieQueryDropDown = ({onValueChange}: Props) => {
  const [selectedValue, setSelectedValue] = useState<MovieQueryType>('popularMovies');

  return (
    <Select
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
  selectTrigger: {justifyContent: 'space-between'},
  selectDragIndicatorContainer: {marginVertical: 16},
  selectContainer: {paddingBottom: 32},
});
