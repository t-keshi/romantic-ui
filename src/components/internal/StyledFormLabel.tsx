import { styled } from '../../theme';

export const StyledFormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  color: theme.palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  marginBottom: theme.spacing(1),
}));
