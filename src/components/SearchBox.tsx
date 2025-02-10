import React from 'react';
import {View} from 'react-native';
import {Input, InputField, InputSlot, InputIcon} from '@/components/ui/input';
import {SearchIcon} from '../../components/ui/icon';

type Props = {
  onChangeText: (value: string) => void;
  value: string;
};

export const SearchBox = ({onChangeText, value}: Props) => {
  return (
    <View>
      <Input
        className="border border-black-300 rounded-s"
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputSlot className="pl-3">
          <InputIcon className="mr-3" as={SearchIcon} />
        </InputSlot>
        <InputField value={value} onChangeText={onChangeText} placeholder="Enter Text here..." />
      </Input>
    </View>
  );
};
