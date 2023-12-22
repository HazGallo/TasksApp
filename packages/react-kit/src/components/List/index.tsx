import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Btn } from '../Btn';
import { IcoBtn } from '../IcoBtn';

interface Props {
  srcImg: string;
  name: string;
  variant: 'primary' | 'secondary';
  avatar: 'yes' | 'no';
  onClick: () => void;
  icon: 'add' | 'delete';
}

export const List = (props: Props) => {
  const { srcImg, name, variant, avatar, onClick, icon } = props;
  return (
    <>
      <Box
        w={'100%'}
        h={'100%'}
        bg={
          variant === 'primary'
            ? '#110F17'
            : variant === 'secondary'
            ? '#0D0C13'
            : 'white'
        }
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'1rem'}
        gap={'20px'}
        rounded={'md'}
        shadow={'md'}
      >
        <Box
          w={'50px'}
          h={'50px'}
          display={
            avatar === 'no' ? 'none' : avatar === 'yes' ? 'flex' : 'flex'
          }
        >
          <Avatar
            bg={
              variant === 'primary'
                ? '#a954c7'
                : variant === 'secondary'
                ? '#3a208a'
                : 'white'
            }
            w={'100%'}
            h={'100%'}
            src={srcImg}
            name={name}
            _hover={{
              boxShadow:
                variant === 'primary'
                  ? '0 0 10px #a954c7, 0 0 40px #a954c7, 0 0 80px #a954c7'
                  : variant === 'secondary'
                  ? '0 0 10px #3a208a, 0 0 40px #3a208a, 0 0 80px #3a208a'
                  : '0 0 10px white, 0 0 40px white, 0 0 80px white',
              transform: 'translateY(-2px)',
            }}
            transition={'0.2s'}
            cursor={'pointer'}
          />
        </Box>

        <Box
          w={avatar === 'no' ? '60%' : avatar === 'yes' ? '40%' : ''}
          color={'white'}
          noOfLines={2}
          textOverflow={'ellipsis'}
        >
          <Text w={'100%'}>{name}</Text>
        </Box>
        <Box
          w={'50px'}
          h={'50px'}
          color={'white'}
          display={
            avatar === 'yes' ? 'none' : avatar === 'no' ? 'flex' : 'none'
          }
        >
          <IcoBtn icon={icon} onClick={onClick} />
        </Box>
      </Box>
    </>
  );
};
