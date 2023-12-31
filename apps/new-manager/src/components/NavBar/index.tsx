import { Box, Text } from '@chakra-ui/react';
import { Btn, Modal } from '@iseazy/react-kit';
import React, { ChangeEvent, useState } from 'react';
import { useTasks } from 'src/store/tasks';

interface Props {
  title: string;
  variant: 'primary' | 'secondary';
  onCLick: () => void;
  task: 'yes' | 'no';
}

export const NavBar = (props: Props) => {
  const { title, onCLick, variant, task } = props;
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState<string | null>(null); // Nuevo estado para manejar el mensaje de error
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Please enter a valid task.'); // Configura el mensaje de error
    } else {
      addTask(newTask);
      setNewTask('');
      setError(null); // Reinicia el mensaje de error
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <Box
      w={'100%'}
      bg="#0d0d0d"
      p={4}
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex={999}
      boxShadow="0px 20px 20px rgba(0, 0, 0, 0.2)"
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Text
        color={'white'}
        fontWeight={'bold'}
        letterSpacing={'5px'}
        _hover={{
          textShadow: '0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 80px #a954c7',
        }}
        cursor={'default'}
      >
        Task App
      </Text>

      <Box w={'50px'} h={'50px'}>
        {task === 'yes' ? (
          <Modal
            errorMessage="Add A Valid Task. Please"
            titleModal="Add Task"
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
            }}
            onClick={() => {
              handleAddTask();
            }}
          />
        ) : task === 'no' ? (
          <></>
        ) : (
          <></>
        )}
      </Box>

      <Box w={['25%', '20%', '10%']}>
        <Btn title={title} variant={variant} onClick={onCLick} />
      </Box>
    </Box>
  );
};
