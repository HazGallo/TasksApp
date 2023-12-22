import { FC, PropsWithChildren } from 'react';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import { Button } from './components/Button';
import { Btn } from './components/Btn';
import { List } from './components/List';
import { IcoBtn } from './components/IcoBtn';
import { Modal } from './components/Modal';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { Button, Btn, IcoBtn, Modal, theme, List, ThemeProvider };
