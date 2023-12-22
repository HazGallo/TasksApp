// import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { IcoBtn } from '../../components/IcoBtn';

interface Props {
  icon: 'delete' | 'add';

  onClick: () => void;
}

export const IcoBtnExample = (props: Props) => {
  const { icon, onClick } = props;

  return (
    <Box
      width={'50px'}
      h={'50px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <IcoBtn icon={icon} onClick={onClick} />
    </Box>
  );
};
