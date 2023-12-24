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
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { Btn } from '../Btn';
import { IcoBtn } from '../IcoBtn';

interface Props {
  value: string;
  errorMessage: string;
  titleModal: string;
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Modal = (props: Props) => {
  const { value, onClick, onChange, errorMessage, titleModal } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (value.trim() === '') {
      setError(errorMessage);
    } else {
      onClick();
      onClose();
      setError('');
    }
  };

  return (
    <>
      <IcoBtn
        icon="add"
        onClick={() => {
          onOpen();
        }}
      />

      <CustomModal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setError('');
        }}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent bg={'#0D0D0D'} color={'white'}>
          <ModalHeader>{titleModal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {error && (
              <Text color="red" fontSize="sm">
                {error}
              </Text>
            )}
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
              <Btn title="Add" variant="primary" onClick={handleAddTask} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </CustomModal>
    </>
  );
};
