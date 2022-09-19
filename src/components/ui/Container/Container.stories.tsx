import { Box } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './Container';

export default {
  title: 'components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Base = Template.bind({});

Base.args = {
  maxWidth: 'sm',
  children: <Box bgcolor="primary.main" height={200} />,
};
