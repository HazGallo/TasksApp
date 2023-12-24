import type { Meta, StoryObj } from '@storybook/react';

import { ModalExample } from './ModalExample';

const meta = {
  title: 'Components/Modal',
  component: ModalExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    value: 'Hi',
    errorMessage: 'Add a valid Task',
    titleModal: 'Add Task',
  },
  argTypes: {},
};
