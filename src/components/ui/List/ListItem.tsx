import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['li'];

type Props = StyleProps & BaseProps;

const listItemClasses = {
  root: 'Rui-ListItem-root',
};

const StyledListItem = styled('li')<Required<StyleProps>>(({ theme, hasDivider }) => ({
  ...theme.typography.body1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
  },
  ...(hasDivider && {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box',
  }),
}));

export const ListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const { className, children, hasDivider = true, ...rest } = props;

  return (
    <StyledListItem
      className={clsx(listItemClasses.root)}
      hasDivider={hasDivider}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledListItem>
  );
});
