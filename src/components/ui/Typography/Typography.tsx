import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import { Theme, styled } from '../../../theme';
import { isPropValid } from '../../../util/isPropValid';
import { OverrideComponent, OverrideStyleProps } from '../../../util/utilityTypes';
type StyleProps = {
  color?:
    | 'inherit'
    | 'textPrimary'
    | 'textSecondary'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success';
  variant?: keyof Theme['typography'];
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type Props<TElementType extends React.ElementType = 'p'> = OverrideStyleProps<
  StyleProps,
  TElementType
> &
  BaseProps;

const typogrqphyClasses = {
  root: 'Rui-Typogrqphy-root',
};

const StyledTypography = styled('p', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<Required<StyleProps>>(({ theme, variant, color }) => {
  const themeColor = {
    inherit: undefined,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    action: theme.palette.action.active,
    disabled: theme.palette.action.disabled,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
  }[color];

  return {
    margin: 0,
    color: themeColor,
    ...theme.typography[variant],
  };
});

const renderFunction = <TElementType extends React.ElementType = 'p'>(
  props: Props<TElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) => {
  const {
    children,
    className,
    as = 'p',
    variant = 'body1',
    color = 'textPrimary',
    ...rest
  } = props;
  const TypographyElement = StyledTypography.withComponent(as);
  return (
    <TypographyElement
      className={cx(typogrqphyClasses.root, className)}
      ref={ref}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </TypographyElement>
  );
};

export const Typography = forwardRef(renderFunction) as OverrideComponent<StyleProps, 'p'>;
