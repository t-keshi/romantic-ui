import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormSelect } from './FormSelect';
import { Box } from '@mui/system';

export default {
  title: 'components/FormSelect',
  component: FormSelect,
} as ComponentMeta<typeof FormSelect>;

const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Base = Template.bind({});

Base.args = {};
