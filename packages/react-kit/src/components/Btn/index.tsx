import { Button } from '@chakra-ui/react';

import '@fontsource/roboto';

export interface Props {
  title: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

export const Btn = (props: Props) => {
  const { title, variant, onClick } = props;

  return (
    <>
      <Button
        w={'100%'}
        bg={
          variant === 'primary'
            ? '#a954c7'
            : variant === 'secondary'
            ? 'none'
            : ''
        }
        borderWidth={
          variant === 'primary'
            ? 'none'
            : variant === 'secondary'
            ? '3px'
            : '0px'
        }
        borderColor={
          variant === 'primary'
            ? 'none'
            : variant === 'secondary'
            ? '#a954c7'
            : 'none'
        }
        color={'white'}
        rounded={'lg'}
        _hover={{
          bg: '#a954c7',
          boxShadow: '0 0 10px #a954c7, 0 0 40px #a954c7, 0 0 80px #a954c7',
          transform: 'translateY(-2px)',
        }}
        transition={'0.2s'}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
};
