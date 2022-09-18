import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormRadio } from './FormRadio';
import { Box } from '@mui/system';

export default {
  title: 'components/FormRadio',
  component: FormRadio,
} as ComponentMeta<typeof FormRadio>;

const Template: ComponentStory<typeof FormRadio> = (args) => <FormRadio {...args} />;

export const Base = Template.bind({});

Base.args = {};
