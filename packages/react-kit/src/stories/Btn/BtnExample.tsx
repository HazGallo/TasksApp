// import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { Btn } from '../../components/Btn';

interface Props {
  title: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

export const BtnExample = (props: Props) => {
  const { title, variant, onClick } = props;

  return (
    <Box
      width={'200px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <Btn variant={variant} title={title} onClick={onClick} />
    </Box>
  );
};
