import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormCheckbox } from './FormCheckbox';
import { Box } from '@mui/system';

export default {
  title: 'components/FormCheckbox',
  component: FormCheckbox,
} as ComponentMeta<typeof FormCheckbox>;

const Template: ComponentStory<typeof FormCheckbox> = (args) => <FormCheckbox {...args} />;

export const Base = Template.bind({});

Base.args = {};
