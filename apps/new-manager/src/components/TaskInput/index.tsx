import { Box, Input } from '@chakra-ui/react';
import { Btn } from '@iseazy/react-kit';
import React, { useState } from 'react';
import { useTasks } from 'src/store/tasks';

const TaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <Box>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Btn title="Add Tasks" variant="primary" onClick={handleAddTask} />
    </Box>
  );
};

export default TaskInput;
