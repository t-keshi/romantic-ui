import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const listItemButtonClasses = {
  root: 'Rui-ListItemButton-root',
};

export const StyledListItemButton = styled('div')<Required<StyleProps>>(
  ({ theme, hasDivider }) => ({
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
  }),
);

export const ListItemButton = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, hasDivider, ...rest } = props;

  return (
    <div className={cx(listItemButtonClasses.root, className)} {...rest} ref={ref}>
      {children}
    </div>
  );
});
