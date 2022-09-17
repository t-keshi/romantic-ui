import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  size?: 'sm' | 'md';
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const listItemClasses = {
  root: 'Rui-ListItemIcon-root',
};

const StyledListItemIcon = styled('div')<Required<StyleProps>>(({ theme, size }) => ({
  color: theme.palette.action.active,
  flexShrink: 0,
  display: 'inline-flex',
  minWidth: size === 'sm' ? 36 : 56,
}));

export const ListItemIcon = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, size = 'md', ...rest } = props;

  return (
    <StyledListItemIcon
      className={clsx(listItemClasses.root, className)}
      size={size}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledListItemIcon>
  );
});
