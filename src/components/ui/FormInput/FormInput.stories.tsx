import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormInput } from './FormInput';

export default {
  title: 'components/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const Error = () => <FormInput label="年齢" required errorMessage="必須入力です。" />;
