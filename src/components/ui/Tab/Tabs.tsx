import { cx } from '@emotion/css';
import { ButtonUnstyled, TabsListUnstyled, TabsUnstyled, TabsUnstyledProps } from '@mui/base';
import React from 'react';
import { forwardRef, Fragment } from 'react';
import { styled } from '../../../theme';
import { createTransition } from '../../../util/createTransition';

type StyleProps = {
  indicatorColor: 'primary' | 'secondary';
  textColor: string;
  fullWidth: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className: string;
  textColor: 'inherit' | 'primary' | 'secondary';
} & TabsUnstyledProps;

type Props = StyleProps & BaseProps;

const tabsClasses = {
  root: 'Rui-Tabs-root',
  indicator: 'Rui-Tabs-indicator',
  flexContainer: 'Rui-Tabs-flexContainer',
};

const StyledTabs = styled(TabsUnstyled)(({ theme }) => ({
  overflow: 'hidden',
  minHeight: 48,
  WebkitOverflowScrolling: 'touch',
  display: 'flex',
}));

const StyledTabsList = styled(TabsListUnstyled)(() => ({
  display: 'flex',
}));

const StyledTabsIndicator = styled('span')<Required<Pick<StyleProps, 'indicatorColor'>>>(
  ({ theme, indicatorColor }) => ({
    position: 'absolute',
    height: 2,
    bottom: 0,
    width: '100%',
    ...(indicatorColor === 'primary' && {
      backgroundColor: theme.palette.primary.main,
    }),
    ...(indicatorColor === 'secondary' && {
      backgroundColor: theme.palette.secondary.main,
    }),
  }),
);

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
  const indicator = (
    <StyledTabsIndicator
      className={cx(tabsClasses.indicator, className)}
      indicatorColor={indicatorColor}
    />
  );

  let childIndex = 0;
  const childrenClone = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(child, {
      fullWidth: fullWidth,
      indicator: selected && indicator,
      selected,
      onChange,
      textColor,
      value: childValue,
      ...(childIndex === 1 && value === false && !child.props.tabIndex ? { tabIndex: 0 } : {}),
    });
  });

  return (
    <StyledTabs className={cx(tabsClasses.root, className)} {...rest} ref={ref}>
      <StyledTabsList className={tabsClasses.flexContainer}>{childrenClone}</StyledTabsList>
    </StyledTabs>
  );
});
