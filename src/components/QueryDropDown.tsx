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
import {ContentType, ContentQueryType} from '../types/ContentType';
import {MOVIE_SELECT_OPTIONS, TV_SHOW_SELECT_OPTIONS} from '../constants/ContentType';

type Props = {
  contentType: ContentType;
  onValueChange: (value: ContentQueryType) => void;
  currentValue: ContentQueryType;
};

export const QueryDropDown = ({contentType, onValueChange, currentValue}: Props) => {
  const getLabelByValue = (contentType: ContentType, value: string) => {
    if (contentType === 'movie') {
      const item = MOVIE_SELECT_OPTIONS.find(option => option.value === value);
      return item ? item.label : 'Unknown';
    } else if (contentType === 'tv') {
      const item = TV_SHOW_SELECT_OPTIONS.find(option => option.value === value);
      return item ? item.label : 'Unknown';
    }
    return 'Unknown';
  };

  return (
    <Select
      initialLabel={getLabelByValue(contentType, currentValue)}
      defaultValue={currentValue}
      onValueChange={value => {
        onValueChange(value as ContentQueryType);
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
          {contentType === 'movie' ? (
            <>
              <SelectItem label="Now Playing" value="nowPlayingMovies" />
              <SelectItem label="Popular" value="popularMovies" />
              <SelectItem label="Top Rated" value="topRatedMovies" />
              <SelectItem label="Upcoming" value="upcomingMovies" />
            </>
          ) : (
            <>
              <SelectItem label="Airing Today" value="airingTodayTVShows" />
              <SelectItem label="On The Air" value="onTheAirTVShows" />
              <SelectItem label="Popular" value="popularTVShows" />
              <SelectItem label="Top Rated" value="topRatedTVShows" />
            </>
          )}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
