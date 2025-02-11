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
import {ContentType} from '../types/ContentType';
import {CONTENT_SELECT_OPTIONS} from '../constants/ContentType';

type Props = {
  onValueChange: (value: ContentType) => void;
  currentValue: ContentType;
};

export const ContentTypeDropDown = ({onValueChange, currentValue}: Props) => {
  const getLabelByValue = (value: string) => {
    const item = CONTENT_SELECT_OPTIONS.find(option => option.value === value);
    return item ? item.label : 'Unknown';
  };

  return (
    <Select
      initialLabel={getLabelByValue(currentValue)}
      defaultValue={currentValue}
      onValueChange={value => {
        onValueChange(value as ContentType);
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
          <SelectItem label="Movie" value="movie" />
          <SelectItem label="Multi" value="multi" />
          <SelectItem label="TV Show" value="tv" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
