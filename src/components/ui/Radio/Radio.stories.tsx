import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

export default {
  title: 'components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: 'ラベル付き',
};
