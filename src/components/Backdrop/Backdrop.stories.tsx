import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Backdrop } from './Backdrop';

export default {
  title: 'components/Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Base = Template.bind({});

Base.args = {};
