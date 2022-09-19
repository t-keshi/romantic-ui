import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';
import { Box } from '@mui/system';

export default {
  title: 'components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const WithText = Template.bind({});

WithText.args = {
  children: '⇦Before / After⇨',
  orientation: 'vertical',
};
