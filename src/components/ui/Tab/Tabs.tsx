import { cx } from '@emotion/css';
import { TabsListUnstyled, TabsUnstyled, TabsUnstyledProps } from '@mui/base';
import React from 'react';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  indicatorColor?: 'primary' | 'secondary';
  textColor?: string;
  fullWidth?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & TabsUnstyledProps;

type Props = StyleProps & BaseProps;

const tabsClasses = {
  root: 'Rui-Tabs-root',
  indicator: 'Rui-Tabs-indicator',
  flexContainer: 'Rui-Tabs-flexContainer',
};

const StyledTabs = styled(TabsUnstyled)(() => ({
  overflow: 'hidden',
  minHeight: 48,
  WebkitOverflowScrolling: 'touch',
  display: 'flex',
}));

const StyledTabsList = styled(TabsListUnstyled)(() => ({
  display: 'flex',
}));

export const Tabs = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    value,
    onChange,
    fullWidth = false,
    indicatorColor = 'primary',
    textColor = 'primary',
    ...rest
  } = props;

  return (
    <StyledTabs className={cx(tabsClasses.root, className)} {...rest} ref={ref}>
      <StyledTabsList className={tabsClasses.flexContainer}>{children}</StyledTabsList>
    </StyledTabs>
  );
});
