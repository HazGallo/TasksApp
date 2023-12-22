import { Button, Tooltip } from '@chakra-ui/react';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  icon: 'delete' | 'add';
  onClick: () => void;
}

export const IcoBtn = (props: Props) => {
  const { icon, onClick } = props;
  return (
    <>
      <Tooltip
        label={icon === 'add' ? 'Add Task' : icon === 'delete' ? 'Delete' : ''}
        placement={'top'}
        color={'white'}
        rounded={'md'}
        bgColor={'#0D0D0D'}
      >
        <Button
          bg={icon === 'delete' ? 'red' : icon === 'add' ? '#3a208a' : 'white'}
          w={'100%'}
          h={'100%'}
          rounded={'50px'}
          onClick={onClick}
          _hover={{
            boxShadow:
              icon === 'add'
                ? '0 0 10px #3a208a, 0 0 40px #3a208a, 0 0 80px #3a208a'
                : icon === 'delete'
                ? '0 0 10px  #ff0000 , 0 0 40px  #ff0000 , 0 0 80px  #ff0000 '
                : '0 0 10px white, 0 0 40px white, 0 0 80px white',
            transform: 'translateY(-2px)',
          }}
          transition={'0.2s'}
        >
          <FontAwesomeIcon
            icon={icon === 'add' ? faAdd : icon === 'delete' ? faTrash : faAdd}
          />
        </Button>
      </Tooltip>
    </>
  );
};
