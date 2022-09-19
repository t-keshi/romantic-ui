import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import React from 'react';
import { useAnchorEl } from '../../../util/useAnchorEl';
import { IconButton } from '../IconButton/IconButton';
import { MdMenu } from 'react-icons/md';

export default {
  title: 'components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: (
    <>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem hasDivider={false}>Menu3</MenuItem>
    </>
  ),
};

export const HumburgerMenu = () => {
  const { anchorEl, onOpen, onClose } = useAnchorEl();

  return (
    <>
      <IconButton onClick={onOpen}>
        <MdMenu />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>Menu1</MenuItem>
        <MenuItem>Menu2</MenuItem>
        <MenuItem hasDivider={false}>Menu3</MenuItem>
      </Menu>
    </>
  );
};
