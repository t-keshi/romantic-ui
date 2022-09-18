import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex } from './Flex';
import { Box } from '@mui/system';

export default {
  title: 'components/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Base = Template.bind({});

Base.args = {
  justifyContent: 'space-between',
  children: (
    <>
      <Box bgcolor="primary.main" height={200} width={200} />
      <Box bgcolor="primary.main" height={200} width={200} />
    </>
  ),
};
