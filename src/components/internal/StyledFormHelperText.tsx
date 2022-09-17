import { formControlUnstyledClasses } from '@mui/base';
import { styled } from '../../theme';

type StyleProps = {
  size?: 'sm' | 'md';
};

export const StyledFormHelperText = styled('p')<Required<StyleProps>>(({ theme, size }) => ({
  color: theme.palette.text.secondary,
  ...theme.typography.caption,
  textAlign: 'left',
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formControlUnstyledClasses.disabled}`]: {
    color: theme.palette.text.disabled,
  },
  [`&.${formControlUnstyledClasses.error}`]: {
    color: theme.palette.error.main,
  },
  ...(size === 'sm' && {
    marginTop: 4,
  }),
}));
