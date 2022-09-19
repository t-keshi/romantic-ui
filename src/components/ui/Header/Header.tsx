import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = BaseProps & StyleProps;

const headerClasses = {
  root: 'Rui-Header-root',
  appBar: 'Rui-AppBar-appBar',
  toolbar: 'Rui-Toolbar-toolbar',
};

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
  backgroundColor: theme.palette.background.paper,
}));

const StyledToolBar = styled('div')<Required<StyleProps>>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 54,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const Header = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cx(headerClasses.root, className)} {...rest} ref={ref}>
      <StyledAppBar className={headerClasses.appBar}>
        <StyledToolBar className={headerClasses.toolbar}>{children}</StyledToolBar>
      </StyledAppBar>
      <StyledToolBar className={headerClasses.toolbar} />
    </div>
  );
});
