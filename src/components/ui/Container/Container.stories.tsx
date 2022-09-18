import { Box } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container, Props } from './Container';

export default {
  title: 'components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<(props: Props) => JSX.Element> = (args) => <Container {...args} />;

export const Base = Template.bind({});

Base.args = {
  maxWidth: 'sm',
  children: <Box bgcolor="red" height={200} />,
};
