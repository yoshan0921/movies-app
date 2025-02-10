import React from 'react';
import {Button, ButtonText, ButtonIcon} from '@/components/ui/button';
import {SearchIcon} from '../../components/ui/icon';

type Props = {
  onPress: () => void;
};

export const SearchButton = ({onPress}: Props) => {
  return (
    <Button
      style={{backgroundColor: '#22B5D4'}}
      size="md"
      variant="solid"
      action="primary"
      onPress={() => onPress()}>
      <ButtonIcon className="mr-3" as={SearchIcon} />
      <ButtonText>Search</ButtonText>
    </Button>
  );
};
