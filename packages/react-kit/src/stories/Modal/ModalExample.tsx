// import { useState } from 'react';

import { Box } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { Modal } from '../../components/Modal';

interface Props {
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const ModalExample = (props: Props) => {
  const { onClick, value, onChange } = props;

  return (
    <Box
      width={'50px'}
      h={'50px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <Modal onChange={onChange} onClick={onClick} value={value} />
    </Box>
  );
};
