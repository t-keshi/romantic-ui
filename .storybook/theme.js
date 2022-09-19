import { create } from '@storybook/theming/create';

export const theme = create({
  base: 'light',

  colorPrimary: '#319795',
  colorSecondary: '#2d3748',

  appBg: '#ffffff',
  appBorderColor: '#319795',
  appBorderRadius: 4,

  barTextColor: '#319795',
  barSelectedColor: '#319795',
  barBg: '#f9fafb',

  inputBg: 'white',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#f9fafb',
  inputBorderRadius: 4,

  brandTitle: 'Romantic UI',
  brandImage: '/logo.svg',
  brandUrl:
    'https://main--6327e299b25d28bf5e435580.chromatic.com/?path=/story/introduction-welcome--page',
});
