import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';
import React from 'react';
import { Tab } from './Tab';

export default {
  title: 'components/Tab',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: (
    <>
      <Tab label="tab1" />
      <Tab label="tab2" />
    </>
  ),
};
