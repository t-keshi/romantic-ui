import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';
import React from 'react';

export default {
  title: 'components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Base = Template.bind({});

Base.args = {
  options: [
    {
      value: 0,
      label: 'hey',
    },
    {
      value: 1,
      label: 'hey',
    },
  ],
};
