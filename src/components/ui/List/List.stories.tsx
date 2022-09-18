import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from './List';
import React from 'react';
import { Button } from '../Button/Button';
import { MdChevronRight } from 'react-icons/md';
import { ListItem } from './ListItem';
import { ListItemText } from './ListItemText';
import { ListItemIcon } from './ListItemIcon';

export default {
  title: 'components/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: (
    <>
      <ListItem>
        <ListItemIcon>
          <MdChevronRight />
        </ListItemIcon>
        <ListItemText>テスト１</ListItemText>
      </ListItem>
      <ListItem hasDivider={false}>
        <ListItemIcon>
          <MdChevronRight />
        </ListItemIcon>
        <ListItemText>テスト２</ListItemText>
      </ListItem>
    </>
  ),
};
