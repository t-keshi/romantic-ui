import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormSelect } from './FormSelect';

export default {
  title: 'components/FormSelect',
  component: FormSelect,
} as ComponentMeta<typeof FormSelect>;

const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const Error = () => (
  <FormSelect
    label="好きな果物"
    required
    errorMessage="必須入力です。"
    options={[{ label: 'バナナ', value: 'banaan' }]}
  />
);
