import { cx } from '@emotion/css';
import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { createTransition } from '../../../util/createTransition';
import { OverrideComponent, OverrideStyleProps, Size } from '../../../util/utilityTypes';

type StyleProps = {
  size?: Size;
  variant?: 'contained' | 'outlined' | 'text' | 'disabled';
  color?: 'inherit' | 'primary' | 'secondary';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type Props<TElementType extends React.ElementType = 'li'> = OverrideStyleProps<
  StyleProps,
  TElementType
> &
  BaseProps;

const buttonClasses = {
  root: 'Rui-Button-root',
  startIcon: 'Rui-Button-startIcon',
  endIcon: 'Rui-Button-endIcon',
};

const StyledButton = styled(ButtonUnstyled)<
  Required<Pick<StyleProps, 'variant' | 'color' | 'size'>>
>(({ theme, variant, color, size }) => ({
  ...theme.typography.button,
  minWidth: 112,
  padding: '6px 16px',
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  alignItems: 'center',
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  borderRadius: 6,
  backgroundColor: 'inherit',
  transion: createTransition(['background-color', 'box-shadow', 'border-color', 'color'], {
    duration: 'short',
  }),
  '&:active': {
    ...(variant === 'contained' && {
      boxShadow: theme.shadows[1],
    }),
  },
  [`&.${buttonUnstyledClasses.disabled}`]: {
    cursor: 'not-allowed',
    color: theme.palette.action.disabled,
    ...(variant === 'outlined' && {
      border: `1px solid ${theme.palette.action.disabledBackground}`,
    }),
    ...(variant === 'outlined' &&
      color === 'secondary' && {
        border: `1px solid ${theme.palette.action.disabled}`,
      }),
    ...(variant === 'contained' && {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    }),
  },
  ...(variant === 'text' && {
    ...theme.typography.button,
    color: theme.palette.text.secondary,
  }),
  ...(variant === 'disabled' && {
    color: theme.palette.action.disabled,
    backgroundColor: theme.palette.action.disabledBackground,
  }),
  // color
  ...(variant === 'contained' &&
    color === 'inherit' && {
      color: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
    }),
  ...(variant === 'contained' &&
    color === 'primary' && {
      color: theme.palette.primary.contrastText,
      border: 'none',
      background: theme.palette.primary.main,
      ':hover': {
        background: theme.palette.primary.dark,
      },
    }),
  ...(variant === 'contained' &&
    color === 'secondary' && {
      color: theme.palette.secondary.contrastText,
      border: 'none',
      background: theme.palette.secondary.main,
      ':hover': {
        background: theme.palette.secondary.dark,
      },
    }),
  ...(variant === 'outlined' &&
    color === 'inherit' && {
      border: `1px solid ${theme.palette.divider}`,
      ':hover': {
        background: theme.palette.action.hover,
      },
    }),
  ...(variant === 'outlined' &&
    color === 'primary' && {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      ':hover': {
        background: theme.palette.action.hover,
      },
    }),
  ...(variant === 'outlined' &&
    color === 'secondary' && {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      ':hover': {
        background: theme.palette.action.hover,
      },
    }),
  // size
  ...(variant === 'text' &&
    size === 'sm' && {
      padding: '4px 5px',
      fontSize: '13px',
    }),
  ...(variant === 'text' &&
    size === 'lg' && {
      padding: '8px 11px',
      fontSize: '18px',
    }),
  ...(variant === 'outlined' &&
    size === 'sm' && {
      padding: '3px 9px',
      fontSize: '13px',
    }),
  ...(variant === 'outlined' &&
    size === 'lg' && {
      padding: '7px 21px',
      fontSize: '18px',
    }),
  ...(variant === 'contained' &&
    size === 'sm' && {
      padding: '4px 10px',
      fontSize: '13px',
    }),
  ...(variant === 'contained' &&
    size === 'lg' && {
      padding: '8px 22px',
      fontSize: '18px',
    }),
  ...(variant === 'disabled' &&
    size === 'sm' && {
      padding: '4px 10px',
      fontSize: '13px',
    }),
  ...(variant === 'disabled' &&
    size === 'lg' && {
      padding: '8px 22px',
      fontSize: '18px',
    }),
}));

const commonIconStyles = (size: Size) => ({
  ...(size === 'sm' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18,
    },
  }),
  ...(size === 'md' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20,
    },
  }),
  ...(size === 'lg' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22,
    },
  }),
});

export const StyledButtonStartIcon = styled('span')<Required<Pick<StyleProps, 'size'>>>(
  ({ size }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    ...(size === 'sm' && {
      marginLeft: -2,
    }),
    ...commonIconStyles(size),
  }),
);

export const StyledButtonEndIcon = styled('span')<Required<Pick<StyleProps, 'size'>>>(
  ({ size }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    ...(size === 'sm' && {
      marginRight: -2,
    }),
    ...commonIconStyles(size),
  }),
);

export const renderFunction = <TElementType extends React.ElementType = 'button'>(
  props: Props<TElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) => {
  const {
    children,
    className,
    as = 'button',
    type = 'button',
    variant = 'contained',
    color = 'primary',
    size = 'md',
    startIcon,
    endIcon,
    ...rest
  } = props;
  const ButtonElement = StyledButton.withComponent(as);
  const renderStartIcon = startIcon && (
    <StyledButtonStartIcon className={buttonClasses.startIcon} size={size}>
      {startIcon}
    </StyledButtonStartIcon>
  );
  const renderEndIcon = endIcon && (
    <StyledButtonEndIcon className={buttonClasses.startIcon} size={size}>
      {endIcon}
    </StyledButtonEndIcon>
  );
  const restProps = {
    ...rest,
    ...(as === 'button' && { type: type as JSX.IntrinsicElements['button']['type'] }),
    ...(variant === 'disabled' && { disabled: true }),
  };

  return (
    <ButtonElement
      className={cx(
        buttonClasses.root,
        variant === 'disabled' && buttonUnstyledClasses.disabled,
        className,
      )}
      variant={variant}
      color={color}
      size={size}
      disabled={variant === 'disabled'}
      {...restProps}
      ref={ref}
    >
      {renderStartIcon}
      {children}
      {renderEndIcon}
    </ButtonElement>
  );
};

export const Button = forwardRef(renderFunction) as OverrideComponent<StyleProps, 'button'>;
