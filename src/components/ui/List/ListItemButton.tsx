import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['button'];

type Props = StyleProps & BaseProps;

const listItemButtonClasses = {
  root: 'Rui-ListItemButton-root',
};

const StyledListItemButton = styled('button')<Required<StyleProps>>(({ theme, hasDivider }) => ({
  ...theme.typography.body1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  paddingLeft: 16,
  paddingRight: 16,
  '&:hover': {
    textDecoration: 'none',
  },
  ...(hasDivider && {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box',
  }),
}));

export const ListItemButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, children, hasDivider = false, ...rest } = props;

  return (
    <StyledListItemButton
      className={cx(listItemButtonClasses.root, className)}
      hasDivider={hasDivider}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledListItemButton>
  );
});
