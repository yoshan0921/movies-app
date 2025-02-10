import React from 'react';
import {View} from 'react-native';
import {Input, InputField, InputSlot, InputIcon} from '@/components/ui/input';
import {SearchIcon} from '../../components/ui/icon';

type Props = {
  onChangeText: (value: string) => void;
  value: string;
  isError: boolean;
};

export const SearchBox = ({onChangeText, value, isError}: Props) => {
  return (
    <View>
      <Input
        className={`border rounded-s ${isError ? 'border-red-500' : 'border-black-300'} focus:border-blue-500`}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputSlot className="pl-3">
          <InputIcon className="mr-3" as={SearchIcon} />
        </InputSlot>
        <InputField value={value} onChangeText={onChangeText} placeholder="i.e. James Bond, CSI." />
      </Input>
    </View>
  );
};
