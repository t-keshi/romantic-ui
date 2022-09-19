import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormGroup } from './FormGroup';
import { Box } from '@mui/system';
import { Checkbox } from '../Checkbox/Checkbox';

export default {
  title: 'components/FormGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => <FormGroup {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: (
    <>
      <Checkbox label="apple" />
      <Checkbox label="banana" />
      <Checkbox label="orange" />
    </>
  ),
};

export const Row = Template.bind({});

Row.args = {
  children: (
    <>
      <Checkbox label="apple" />
      <Checkbox label="banana" />
      <Checkbox label="orange" />
    </>
  ),
  row: true,
};
