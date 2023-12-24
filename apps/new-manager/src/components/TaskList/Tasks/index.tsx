import { Box, Heading } from '@chakra-ui/react';
import { List } from '@iseazy/react-kit';
import React from 'react';
import { useTasks } from 'src/store/tasks';

export const Tasks = () => {
  const { taskId, removeTask } = useTasks();

  return (
    <>
      {taskId.map((taskId, index) => (
        <Box
          key={taskId}
          w={'100%'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <List
            avatar="no"
            icon="delete"
            onClick={() => removeTask(taskId)}
            name={taskId}
            srcImg=""
            variant={index % 2 === 0 ? 'primary' : 'secondary'}
          />
        </Box>
      ))}
    </>
  );
};
