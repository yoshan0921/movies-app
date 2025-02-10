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
import {ContentType} from '../types/ContentType';

type Props = {
  onValueChange: (value: ContentType) => void;
  currentValue: ContentType;
};

const types = [
  {label: 'Movie', value: 'movie'},
  {label: 'Multi', value: 'multi'},
  {label: 'TV Show', value: 'tv'},
];

const getLabelByValue = (value: string) => {
  const item = types.find(type => type.value === value);
  return item ? item.label : 'Unknown';
};

export const ContentTypeDropDown = ({onValueChange, currentValue}: Props) => {
  return (
    <Select
      initialLabel={getLabelByValue(currentValue)}
      defaultValue={currentValue}
      onValueChange={value => {
        onValueChange(value as ContentType);
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
          <SelectItem label="Movie" value="movie" />
          <SelectItem label="Multi" value="multi" />
          <SelectItem label="TV Show" value="tv" />
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
