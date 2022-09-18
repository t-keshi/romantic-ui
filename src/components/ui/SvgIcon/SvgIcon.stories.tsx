import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SvgIcon } from './SvgIcon';
import React from 'react';
import AttachmentPin from '../../icons/AttachmentPin';

export default {
  title: 'components/SvgIcon',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => <SvgIcon {...args} />;

export const Base = Template.bind({});

Base.args = {
  icon: <AttachmentPin />,
};
