import { theme, Theme } from '../theme';

export const mq = (key: keyof Theme['breakpoints']) => `(min-width: ${theme.breakpoints[key]})`;
