import {
  ModalOverlay,
  Modal as CustomModal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Input,
  Box,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { Btn } from '../Btn';

import { IcoBtn } from '../IcoBtn';

interface Props {
  value: string;
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Modal = (props: Props) => {
  const { value, onClick, onChange } = props;
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <IcoBtn
        icon="add"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />

      <CustomModal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalContent bg={'#0D0D0D'} color={'white'}>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Add your task"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              borderBottomColor={isFocused ? 'teal.500' : 'gray.300'}
              _focus={{ borderBottomColor: 'teal.500' }}
              value={value}
              onChange={onChange}
            />
          </ModalBody>
          <ModalFooter w={'100%'}>
            <Box w={'20%'}>
              <Btn title="Add" variant="primary" onClick={onClick} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </CustomModal>
    </>
  );
};
