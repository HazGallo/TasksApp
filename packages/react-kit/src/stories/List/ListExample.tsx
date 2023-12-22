// import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { List } from '../../components/List';

interface Props {
  name: string;
  variant: 'primary' | 'secondary';
  srcImage: string;
  avatar: 'yes' | 'no';
  onClick: () => void;
  icon: 'add' | 'delete';
}

export const ListExample = (props: Props) => {
  const { name, variant, srcImage, avatar, onClick, icon } = props;

  return (
    <Box
      width={'300px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <List
        name={name}
        srcImg={srcImage}
        variant={variant}
        avatar={avatar}
        onClick={onClick}
        icon={icon}
      />
    </Box>
  );
};
