import { cx } from '@emotion/css';
import { MenuUnstyled, MenuUnstyledProps, PopperUnstyled } from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { OverrideComponent, OverrideStyleProps } from '../../../util/utilityTypes';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & MenuUnstyledProps;

type Props = StyleProps & BaseProps;

const menuClasses = {
  root: 'Rui-Menu-root',
};

const StyledListbox = styled('ul')<Required<StyleProps>>(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
  outline: 0,
  overflow: 'auto',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export const Menu = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { children, className, anchorEl, ...rest } = props;

  return (
    <MenuUnstyled
      className={cx(menuClasses.root, className)}
      components={{ Listbox: StyledListbox }}
      {...rest}
      ref={ref}
    >
      {children}
    </MenuUnstyled>
  );
});
