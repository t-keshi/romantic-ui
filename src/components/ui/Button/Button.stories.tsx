import { Stack } from '@mui/system';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Button, Props } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: 'LABEL',
};

export const Variant = () => (
  <Stack spacing={2} width={200}>
    <Button variant="contained">LABEL</Button>
    <Button variant="outlined">LABEL</Button>
    <Button variant="disabled">LABEL</Button>
    <Button variant="text">LABEL</Button>
  </Stack>
);

export const Color = () => (
  <Stack spacing={2} width={200}>
    <Button color="primary">LABEL</Button>
    <Button color="secondary">LABEL</Button>
    <Button color="inherit">LABEL</Button>
  </Stack>
);
