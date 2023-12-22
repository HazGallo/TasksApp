import { Box } from '@chakra-ui/react';
import { List } from '@iseazy/react-kit';
import { useNavigate } from 'react-router-dom';
import { useFetchUsers } from 'src/hooks/useUsers';
import { NavBar } from '../NavBar';

export const Users = () => {
  const { data } = useFetchUsers();

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/home');
  };

  return (
    <Box
      w={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'20px'}
    >
      <NavBar
        task="no"
        title="Back"
        variant="primary"
        onCLick={() => {
          handleClickHome();
        }}
      />

      <Box
        py={'65px'}
        w={'100%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'20px'}
        textAlign={'center'}
      >
        {data?.map((u, index) => (
          <List
            avatar="yes"
            icon="add"
            onClick={() => {
              'hola';
            }}
            key={u.id}
            name={u.name}
            srcImg={u.avatar}
            variant={index % 2 === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </Box>
    </Box>
  );
};
