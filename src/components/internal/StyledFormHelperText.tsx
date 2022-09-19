import { formControlUnstyledClasses } from '@mui/base';
import { alpha } from '@mui/system';
import { styled } from '../../theme';
import { isPropValid } from '../../util/isPropValid';

type StyleProps = {
  size: 'sm' | 'md';
  fullWidth?: boolean;
};

export const StyledFormHelperText = styled('p', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<StyleProps>(({ theme, size, fullWidth }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  textAlign: 'left',
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formControlUnstyledClasses.disabled}`]: {
    color: theme.palette.text.disabled,
  },
  [`&.${formControlUnstyledClasses.error}`]: {
    marginTop: theme.spacing(1),
    display: 'block',
    width: fullWidth ? '100%' : 320,
    color: theme.palette.error.main,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    border: `1px solid ${alpha(theme.palette.error.main, 0.8)}`,
    padding: theme.spacing(2),
  },
  ...(size === 'sm' && {
    marginTop: 4,
  }),
}));
