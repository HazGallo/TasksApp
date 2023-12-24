import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { CustomCard } from 'src/components/CustomCard';

const Home = () => {
  return (
    <Box
      w={'100%'}
      h={'100vh'}
      bg={'#0D0D0D'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        bg={'#110F17'}
        w={['90%', '90%', '40%']}
        h={['60%', '80%']}
        rounded={'lg'}
        p={'1rem'}
        shadow={'md'}
      >
        <CustomCard />
      </Box>
    </Box>
  );
};

export default Home;
