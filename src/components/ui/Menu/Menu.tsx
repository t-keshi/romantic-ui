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
  outline: 0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

const Popper = styled(PopperUnstyled)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1,
}));

export const Menu = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { children, className, anchorEl, open = false, ...rest } = props;

  return (
    <MenuUnstyled
      className={cx(menuClasses.root, className)}
      components={{ Root: Popper, Listbox: StyledListbox }}
      anchorEl={anchorEl}
      open={open}
      {...rest}
      ref={ref}
    >
      {children}
    </MenuUnstyled>
  );
});
