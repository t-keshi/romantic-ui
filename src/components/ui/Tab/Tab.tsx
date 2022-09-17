import { cx } from '@emotion/css';
import { TabUnstyled, TabUnstyledProps } from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';

type StyleProps = {
  textColor: string;
  fullWidth: boolean;
};

type BaseProps = {
  label: string;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  startIcon: React.ReactNode;
  endIcon: React.ReactNode;
} & (
  | {
      startIcon: React.ReactNode;
      endIcon?: never;
    }
  | {
      startIcon: never;
      endIcon?: React.ReactNode;
    }
  | {
      startIcon?: never;
      endIcon?: never;
    }
) &
  TabUnstyledProps;

type Props = StyleProps & BaseProps;

const tabClasses = {
  root: 'Rui-Tab-root',
  selected: 'Rui-Tab-selected',
  disabled: 'Rui-Tab-head',
};

const StyledTab = styled(TabUnstyled)<
  Required<StyleProps> & { iconPosition: null | 'start' | 'end' }
>(({ theme, fullWidth, iconPosition, textColor }) => ({
  ...theme.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  minHeight: 72,
  flexShrink: 0,
  padding: '12px 16px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  flexDirection: 'row',
  lineHeight: 1.25,
  paddingTop: 9,
  paddingBottom: 9,
  ...(iconPosition === 'start' && {
    marginRight: theme.spacing(1),
  }),
  ...(iconPosition === 'end' && {
    marginLeft: theme.spacing(1),
  }),
  ...(textColor === 'inherit' && {
    color: 'inherit',
    opacity: 0.6,
    [`&.${tabClasses.selected}`]: {
      opacity: 1,
    },
    [`&.${tabClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity,
    },
  }),
  ...(textColor === 'primary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.primary.main,
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  }),
  ...(textColor === 'secondary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.secondary.main,
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  }),
  ...(fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none',
  }),
}));

export const Tab = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    className,
    label,
    fullWidth = false,
    textColor = 'inherit',
    selected = false,
    disabled = false,
    startIcon,
    endIcon,
    ...other
  } = props;
  const hasIcon = startIcon || endIcon;
  const iconPosition = hasIcon ? null : startIcon && !endIcon ? 'start' : 'end';
  const classes = [
    tabClasses,
    selected && tabClasses.selected,
    disabled && tabClasses.disabled,
  ].filter((item) => Boolean(item)) as string[];

  return (
    <StyledTab
      className={cx(classes, className)}
      role="tab"
      aria-selected={selected}
      fullWidth={fullWidth}
      textColor={textColor}
      disabled={disabled}
      tabIndex={selected ? 0 : -1}
      iconPosition={iconPosition}
      {...other}
      ref={ref}
    >
      {startIcon}
      {label}
      {endIcon}
      {/* {indicator} */}
    </StyledTab>
  );
});
