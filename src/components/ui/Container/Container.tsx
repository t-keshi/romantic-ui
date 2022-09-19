import { forwardRef } from 'react';
import { styled, Theme } from '../../../theme';
import { cx } from '@emotion/css';
import { Container as MuiContianer } from '@mui/system';

export const Container = styled(MuiContianer)(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));
