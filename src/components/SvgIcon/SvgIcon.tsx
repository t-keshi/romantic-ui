import { cx } from '@emotion/css';
import * as React from 'react';
import { styled, useTheme } from '../../theme';
import { createTransition } from '../../util/createTransition';

type StyleProps = {
  fontSize?: 'inherit' | 'sm' | 'md' | 'lg';
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success';
};

type BaseProps = {
  icon?: React.ReactElement;
  className?: string;
} & JSX.IntrinsicElements['svg'];

type Props = StyleProps & BaseProps;

const svgIconClasses = {
  root: 'Rui-SvgIcon-root',
};

const StyledSvgIcon = styled('svg')<
  Required<Pick<StyleProps, 'fontSize'> & { color: string | undefined }>
>(({ theme, fontSize, color }) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  fill: 'currentColor',
  flexShrink: 0,
  transition: createTransition(['fill'], {
    duration: 'shorter',
  }),
  fontSize: {
    inherit: 'inherit',
    sm: 20,
    md: 24,
    lg: 35,
  }[fontSize],
  color,
}));

export const SvgIcon = React.forwardRef<SVGSVGElement, Props>((props, ref) => {
  const {
    icon,
    className,
    color = 'inherit',
    fontSize = 'md',
    viewBox = '0 0 24 24',
    ...rest
  } = props;
  const theme = useTheme();
  const themeColor = {
    inherit: undefined,
    action: theme.palette.action.active,
    disabled: theme.palette.action.disabled,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
  }[color];

  return (
    <StyledSvgIcon
      className={cx(svgIconClasses.root, className)}
      focusable="false"
      color={themeColor}
      fontSize={fontSize}
      {...rest}
      ref={ref}
    >
      {icon}
    </StyledSvgIcon>
  );
});
