import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';
import { Box } from '@mui/system';
import { Typography } from '../Typography/Typography';

export default {
  title: 'components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const WithText = () => (
  <Box width={500} height={600}>
    <Divider>ここから</Divider>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </Typography>
    <Divider>ここまで</Divider>
  </Box>
);
