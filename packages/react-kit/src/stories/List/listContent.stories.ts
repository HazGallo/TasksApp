import type { Meta, StoryObj } from '@storybook/react';

import { ListExample } from './ListExample';

const meta = {
  title: 'Components/List',
  component: ListExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ListExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    name: 'New Task',
    variant: 'primary',
    srcImage: ' "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg"',
    avatar: 'yes',
    icon: 'add',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    avatar: {
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'select' },
    },
  },
};
