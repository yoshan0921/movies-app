import React from 'react';
import {Keyboard} from 'react-native';
import {Button, ButtonText, ButtonIcon} from '@/components/ui/button';
import {SearchIcon} from '../../components/ui/icon';

type Props = {
  onPress: () => void;
};

export const SearchButton = ({onPress}: Props) => {
  const handlePress = () => {
    Keyboard.dismiss();
    onPress();
  };

  return (
    <Button
      className="bg-cyan-500"
      size="md"
      variant="solid"
      action="primary"
      onPress={handlePress}>
      <ButtonIcon className="mr-3" as={SearchIcon} />
      <ButtonText>Search</ButtonText>
    </Button>
  );
};
