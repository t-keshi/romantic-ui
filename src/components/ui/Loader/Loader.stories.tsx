import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import React from 'react';
import { Button } from '../Button/Button';
import { MdChevronRight } from 'react-icons/md';

export default {
  title: 'components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Base = Template.bind({});

Base.args = {};
