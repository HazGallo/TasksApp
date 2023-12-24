// import { useState } from 'react';

import { Box } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { Modal } from '../../components/Modal';

interface Props {
  value: string;
  errorMessage: string;
  titleModal: string;
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ModalExample = (props: Props) => {
  const { onClick, value, onChange, errorMessage, titleModal } = props;

  return (
    <Box
      width={'50px'}
      h={'50px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <Modal
        errorMessage={errorMessage}
        onChange={onChange}
        onClick={onClick}
        value={value}
        titleModal={titleModal}
      />
    </Box>
  );
};
