import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';

import { List } from '@iseazy/react-kit';
import { Users } from 'src/components/Users';

export const UserList = () => {
  return (
    <Box
      w={'100%'}
      h={'100%'}
      bg={'#0D0D0D'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={'1em'}
    >
      <Box w={'70%'}>
        <Users />
      </Box>
    </Box>
  );
};
