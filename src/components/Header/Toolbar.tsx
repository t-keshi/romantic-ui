import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import { PropsWithTheme, styled } from '../../theme';
import { mq } from '../../util/mediaQuery';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = BaseProps & StyleProps;

const StyledToolBar = styled('div')<Required<StyleProps>>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 54,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

const toolBarClasses = {
  root: 'Rui-ToolBar-root',
};

export const Toolbar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledToolBar ref={ref} className={cx(toolBarClasses.root, className)} {...rest}>
      {children}
    </StyledToolBar>
  );
});
