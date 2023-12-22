import type { Meta, StoryObj } from '@storybook/react';

import { IcoBtnExample } from './icoBtnExample';

const meta = {
  title: 'Components/IcoBtn',
  component: IcoBtnExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IcoBtnExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    icon: 'add',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
  },
};
