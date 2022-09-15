import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../theme';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['header'];

type Props = BaseProps & StyleProps;

const StyledAppBar = styled('header')<Required<StyleProps>>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
  flexShrink: 0,
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  top: 0,
  left: 'auto',
  right: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const appBarClasses = {
  root: 'Rui-AppBar-root',
};

export const AppBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledAppBar ref={ref} className={cx(appBarClasses.root, className)} {...rest}>
      {children}
    </StyledAppBar>
  );
});
