import { Box } from '@chakra-ui/react';
import { Btn } from '@iseazy/react-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const CustomCard = () => {
  const navigate = useNavigate();

  const handleClickUser = () => {
    navigate('/user-list');
  };

  const handleClickTasks = () => {
    navigate('/tasks-list');
  };

  return (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDirection={'column'}
      gap={'20px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box w={'50%'} h={'50%'} fontSize={'150px'} textAlign={'center'}>
        <FontAwesomeIcon icon={faListCheck} color={'white'} />
      </Box>

      <Box display={'flex'} w={'70%'} flexDirection={'column'} gap={'20px'}>
        <Btn
          title="Tasks"
          variant="primary"
          onClick={() => {
            handleClickTasks();
          }}
        />
        <Btn
          title="List"
          variant="secondary"
          onClick={() => {
            handleClickUser();
          }}
        />
      </Box>
    </Box>
  );
};
