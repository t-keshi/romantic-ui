import { cx } from '@emotion/css';

import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { createTransition } from '../../../util/createTransition';

type StyleProps = {
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
  edge?: 'end' | 'start' | false;
  disabled?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['button'];

type Props = StyleProps & BaseProps;

const StyledIconButton = styled('button')<StyleProps>(({ theme, active, size, edge }) => ({
  display: 'flex',
  outline: 'none',
  border: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  overflow: 'visible',
  transition: createTransition(['background-color'], {
    duration: 'shortest',
  }),
  cursor: 'pointer',
  lineHeight: 1,
  color: theme.palette.action.active,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'auto',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(size === 'sm' && {
    padding: 5,
    fontSize: 16,
    width: 40,
    height: 40,
  }),
  ...(size === 'md' && {
    padding: 8,
    fontSize: 24,
    width: 48,
    height: 48,
  }),
  ...(size === 'lg' && {
    padding: 12,
    fontSize: 32,
    width: 56,
    height: 56,
  }),
  ...(edge === 'start' && {
    marginLeft: size === 'sm' ? -3 : -12,
  }),
  ...(edge === 'end' && {
    marginRight: size === 'sm' ? -3 : -12,
  }),
}));

const iconButtonClasses = {
  root: 'Rui-IconButton-root',
};

export const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    className,
    children,
    type = 'button',
    active = false,
    size = 'md',
    disabled = false,
    ...rest
  } = props;

  return (
    <StyledIconButton
      ref={ref}
      className={cx(iconButtonClasses.root, className)}
      type={type}
      active={active}
      disabled={disabled}
      size={size}
      {...rest}
    >
      {children}
    </StyledIconButton>
  );
});
