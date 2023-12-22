import { Box, Heading, Text } from '@chakra-ui/react';
import { Btn } from '@iseazy/react-kit';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { TasksList } from 'src/pages/TasksList';
import { UserList } from 'src/pages/UserList';

const Home = lazy(() => import('src/pages/Home'));

export const ManagerRoutes = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate('/home');
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route
        path="/home"
        element={
          <Suspense
            // typo error => animation
            fallback={<div></div>}
          >
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/user-list"
        element={
          <Suspense
            // typo error => animation
            fallback={<div></div>}
          >
            <UserList />
          </Suspense>
        }
      />
      <Route
        path="/tasks-list"
        element={
          <Suspense
            // typo error => animation
            fallback={<div></div>}
          >
            <TasksList />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Box
            w={'100%'}
            h={'100vh'}
            bg={'#0D0D0D'}
            display={'flex'}
            flexDirection={'column'}
            textAlign={'center'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'20px'}
          >
            <Heading color={'white'}>Error 404 :/</Heading>
            <Box w={'10%'}>
              <Btn
                variant="primary"
                title="Go Home"
                onClick={() => {
                  handleClickHome();
                }}
              />
            </Box>
          </Box>
        }
      />
    </Routes>
  );
};
