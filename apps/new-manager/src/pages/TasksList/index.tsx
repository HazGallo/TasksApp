import { Box } from '@chakra-ui/react';
import React from 'react';
import TaskList from 'src/components/TaskList';

export const TasksList = () => {
  return (
    <Box w={'100%'} h={'100vh'}>
      <Box w={'100%'} bg={'#0d0d0d'}>
        <TaskList />
      </Box>
    </Box>
  );
};
