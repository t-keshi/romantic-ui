import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { alpha } from '@mui/system';

type StyleProps = {
  variant?: 'fullWidth' | 'inset' | 'middle';
  light?: boolean;
  orientation?: 'horizontal' | 'vertical';
  flexItem?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type Props = StyleProps & BaseProps;

export const dividerClasses = {
  root: 'Rui-Divider-root',
  inset: 'Rui-Divider-inset',
  fullWidth: 'Rui-Divider-fullWidth',
  middle: 'Rui-Divider-middle',
  childrenWrapper: 'Rui-Divider-childrenWrapper',
};

const StyledDivider = styled('div')<Required<StyleProps> & { hasChildren: boolean }>(
  ({ theme, variant, light, orientation, flexItem, hasChildren }) => ({
    margin: 0, // Reset browser default style.
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderBottomWidth: 'thin',
    ...(light && {
      borderColor: alpha(theme.palette.divider, 0.08),
    }),
    ...(variant === 'inset' && {
      marginLeft: 72,
    }),
    ...(variant === 'middle' &&
      orientation === 'horizontal' && {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      }),
    ...(variant === 'middle' &&
      orientation === 'vertical' && {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      }),
    ...(orientation === 'vertical' && {
      height: '100%',
      borderBottomWidth: 0,
      borderRightWidth: 'thin',
    }),
    ...(flexItem && {
      alignSelf: 'stretch',
      height: 'auto',
    }),
    ...(hasChildren && {
      display: 'flex',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      border: 0,
      '&::before, &::after': {
        position: 'relative',
        width: '100%',
        borderTop: `thin solid ${theme.palette.divider}`,
        top: '50%',
        content: '""',
        transform: 'translateY(50%)',
      },
    }),
    ...(hasChildren &&
      orientation === 'vertical' && {
        flexDirection: 'column',
        '&::before, &::after': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: `thin solid ${theme.palette.divider}`,
          transform: 'translateX(0%)',
        },
      }),
  }),
);

const StyledDividerChildrenWrapper = styled('span')<Required<Pick<StyleProps, 'orientation'>>>(
  ({ theme, orientation }) => ({
    display: 'inline-block',
    paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
    paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
    ...(orientation === 'vertical' && {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`,
    }),
  }),
);

export const Divider = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    variant = 'fullWidth',
    light = false,
    orientation = 'horizontal',
    flexItem = false,
    ...rest
  } = props;

  return (
    <StyledDivider
      className={cx(
        dividerClasses.root,
        variant === 'fullWidth' && dividerClasses.fullWidth,
        variant === 'inset' && dividerClasses.inset,
        variant === 'middle' && dividerClasses.middle,
        className,
      )}
      variant={variant}
      light={light}
      orientation={orientation}
      flexItem={flexItem}
      hasChildren={children !== undefined}
      {...rest}
      ref={ref}
    >
      {children ? (
        <StyledDividerChildrenWrapper
          className={dividerClasses.childrenWrapper}
          orientation={orientation}
        >
          {children}
        </StyledDividerChildrenWrapper>
      ) : null}
    </StyledDivider>
  );
});
