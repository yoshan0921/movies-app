import React from 'react';
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
import {MOVIE_SELECT_OPTIONS} from '../constants/ContentType';

type Props = {
  onValueChange: (value: MovieQueryType) => void;
  currentValue: MovieQueryType;
};

export const MovieQueryDropDown = ({onValueChange, currentValue}: Props) => {
  const getMovieLabelByValue = (value: string) => {
    const item = MOVIE_SELECT_OPTIONS.find(option => option.value === value);
    return item ? item.label : 'Unknown';
  };

  return (
    <Select
      initialLabel={getMovieLabelByValue(currentValue)}
      defaultValue={currentValue}
      onValueChange={value => {
        onValueChange(value as MovieQueryType);
      }}
      isFocused={true}>
      <SelectTrigger className="justify-between">
        <SelectInput />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent className="pb-8">
          <SelectDragIndicatorWrapper className="my-4">
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
