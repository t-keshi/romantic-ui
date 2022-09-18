import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { MdChevronRight } from 'react-icons/md';

export default {
  title: 'components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: <MdChevronRight />,
};
