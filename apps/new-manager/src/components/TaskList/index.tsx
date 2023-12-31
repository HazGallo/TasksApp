import { Box, Heading, Text } from '@chakra-ui/react';
import { List } from '@iseazy/react-kit';

import { useTasks } from 'src/store/tasks';

import { NavBar } from '../NavBar';
import { useNavigate } from 'react-router-dom';

import '../../App.css';

const TaskList = () => {
  const navigate = useNavigate();

  const { taskId, removeTask } = useTasks();

  const handleClickHome = () => {
    navigate('/home');
  };

  // if (taskId.length === 0) {
  //   return <Heading>You don't have tasks yet</Heading>;
  // }

  return (
    <Box
      w={'100%'}
      h={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <NavBar
        task="yes"
        title="Back"
        variant="primary"
        onCLick={() => {
          handleClickHome();
        }}
      />

      <Text textTransform={'capitalize'} fontSize={'2xl'} color={'white'}>
        You got {taskId.length} tasks
      </Text>
      <Box
        w={['90%', '90%', '90%', '60%']}
        h={'50%'}
        rounded={'md'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'20px'}
        p={'20px'}
        overflowY={'scroll'}
        className={'containerTask'}
      >
        <Box
          w={'100%'}
          h={'30%'}
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
        >
          {taskId.map((taskId, index) => (
            <List
              avatar="no"
              icon="delete"
              onClick={() => removeTask(taskId)}
              name={taskId}
              srcImg=""
              variant={index % 2 === 0 ? 'primary' : 'secondary'}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;
