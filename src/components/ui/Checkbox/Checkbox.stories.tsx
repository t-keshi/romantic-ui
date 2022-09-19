import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import { Box } from '@mui/system';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: 'ラベル付き',
};
