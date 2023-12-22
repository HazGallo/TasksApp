import type { Meta, StoryObj } from '@storybook/react';

import { BtnExample } from './BtnExample';

const meta = {
  title: 'Components/Btn',
  component: BtnExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BtnExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    title: 'New Task',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
  },
};
