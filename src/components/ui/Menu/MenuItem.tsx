import { cx } from '@emotion/css';
import { MenuItemUnstyled, MenuItemUnstyledProps } from '@mui/base';
import { alpha } from '@mui/system';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { dividerClasses } from '../Divider/Divider';
import { listItemIconClasses } from '../List/ListItemIcon';
import { listItemTextClasses } from '../List/ListItemText';

type StyleProps = {
  disableGutters?: boolean;
  hasDivider?: boolean;
  dense?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & MenuItemUnstyledProps;

type Props = StyleProps & BaseProps;

const menuItemClasses = {
  root: 'Rui-MenuItem-root',
  hover: 'Rui-MenuItem-hover',
  focusVisible: 'Rui-MenuItem-focusVisible',
  selected: 'Rui-MenuItem-selected',
  disabled: 'Rui-MenuItem-disabled',
};

const StyledMenuItem = styled(MenuItemUnstyled)<Required<StyleProps>>(
  ({ theme, disableGutters, hasDivider, dense }) => ({
    ...theme.typography.body1,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    minHeight: 48,
    minWidth: 180,
    paddingTop: 12,
    paddingBottom: 12,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    ...(!disableGutters && {
      paddingLeft: 16,
      paddingRight: 16,
    }),
    ...(hasDivider && {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundClip: 'padding-box',
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    [`&.${menuItemClasses.selected}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${menuItemClasses.focusVisible}`]: {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity,
        ),
      },
    },
    [`&.${menuItemClasses.selected}:hover`]: {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
    [`&.${menuItemClasses.focusVisible}`]: {
      backgroundColor: theme.palette.action.focus,
    },
    [`&.${menuItemClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity,
    },
    [`& + .${dividerClasses.root}`]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    [`& + .${dividerClasses.inset}`]: {
      marginLeft: 52,
    },
    [`& .${listItemTextClasses.root}`]: {
      marginTop: 0,
      marginBottom: 0,
    },
    [`& .${listItemTextClasses.inset}`]: {
      paddingLeft: 36,
    },
    [`& .${listItemIconClasses.root}`]: {
      minWidth: 36,
    },
    ...(!dense && {
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto',
      },
    }),
    ...(dense && {
      minHeight: 32,
      paddingTop: 4,
      paddingBottom: 4,
      ...theme.typography.body2,
      [`& .${listItemIconClasses.root} svg`]: {
        fontSize: '1.25rem',
      },
    }),
  }),
);

export const MenuItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const {
    className,
    children,
    disableGutters = false,
    hasDivider = true,
    dense = false,
    ...rest
  } = props;

  return (
    <StyledMenuItem
      className={cx(menuItemClasses.root, className)}
      disableGutters={disableGutters}
      hasDivider={hasDivider}
      dense={dense}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledMenuItem>
  );
});
