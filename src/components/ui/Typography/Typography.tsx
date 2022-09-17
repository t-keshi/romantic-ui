import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import { Theme, styled } from '../../../theme';
import { OverrideComponent, OverrideStyleProps } from '../../../util/utilityTypes';

type StyleProps = {
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

const StyledTypography = styled('p')<Required<StyleProps>>(({ theme, variant }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  ...theme.typography[variant],
}));

const renderFunction = <TElementType extends React.ElementType = 'p'>(
  props: Props<TElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) => {
  const { children, className, as = 'p', variant = 'body1', ...rest } = props;
  const TypographyElement = StyledTypography.withComponent(as);

  return (
    <TypographyElement
      className={cx(typogrqphyClasses.root, className)}
      ref={ref}
      variant={variant}
      {...rest}
    >
      {children}
    </TypographyElement>
  );
};

export const Typography = forwardRef(renderFunction) as OverrideComponent<StyleProps, 'p'>;
