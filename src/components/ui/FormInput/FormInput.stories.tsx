import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormInput } from './FormInput';
import { Box } from '@mui/system';

export default {
  title: 'components/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Base = Template.bind({});

Base.args = {};
