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
import {TVShowQueryType} from '../types/ContentType';
import {TV_SHOW_SELECT_OPTIONS} from '../constants/ContentType';

type Props = {
  onValueChange: (value: TVShowQueryType) => void;
  currentValue: TVShowQueryType;
};

export const TVShowQueryDropDown = ({onValueChange, currentValue}: Props) => {
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
          <SelectItem label="Airing Today" value="airingTodayTVShows" />
          <SelectItem label="On The Air" value="onTheAirTVShows" />
          <SelectItem label="Popular" value="popularTVShows" />
          <SelectItem label="Top Rated" value="topRatedTVShows" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
