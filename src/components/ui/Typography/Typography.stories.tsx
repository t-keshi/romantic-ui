import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';
import React from 'react';
import { Stack } from '@mui/system';

export default {
  title: 'components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Base = Template.bind({});

Base.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
};

export const Variant = () => (
  <Stack spacing={2}>
    <Typography variant="h1">タイポグラフィー</Typography>
    <Typography variant="h2">タイポグラフィー</Typography>
    <Typography variant="h3">タイポグラフィー</Typography>
    <Typography variant="h4">タイポグラフィー</Typography>
    <Typography variant="h5">タイポグラフィー</Typography>
    <Typography variant="h6">タイポグラフィー</Typography>
    <Typography variant="subtitle1">タイポグラフィー</Typography>
    <Typography variant="body1">タイポグラフィー</Typography>
    <Typography variant="body2">タイポグラフィー</Typography>
    <Typography variant="button">タイポグラフィー</Typography>
    <Typography variant="caption">タイポグラフィー</Typography>
  </Stack>
);

export const TextLink = () => (
  <Typography as="a" href="https://google.com" variant="h1" color="primary">
    Link
  </Typography>
);
