import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from '../Typography/Typography';
import { Header } from './Header';

export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: <Typography variant="h4">ヘッダー</Typography>,
};
