import { styled } from '../../theme';

export const StyledFormLabel = styled('label')(({ theme }) => ({
  ...theme.typography.body2,
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  color: theme.palette.text.primary,
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  marginBottom: theme.spacing(0.5),
}));
