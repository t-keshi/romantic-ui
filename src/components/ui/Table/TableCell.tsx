import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';
import { alpha, lighten } from '@mui/system';

type StyleProps = {
  variant?: 'head' | 'body' | 'footer';
  disablePadding?: boolean;
  align?: 'center' | 'left' | 'right' | 'justify';
  size?: 'sm' | 'md';
  sticky?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['td'];

type Props = StyleProps & BaseProps;

const StyledTableCell = styled('td')<Required<StyleProps>>(
  ({ theme, variant, disablePadding, align, size, sticky }) => ({
    ...theme.typography.body2,
    display: 'table-cell',
    verticalAlign: 'inherit',
    textAlign: 'left',
    padding: disablePadding ? 0 : 16,
    borderCollapse: 'collapse',
    border: `1px solid ${lighten(alpha(theme.palette.divider, 1), 0.88)}`,
    cellSpacing: 0,
    ...(variant === 'head' && {
      ...theme.typography.body1,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.h1.fontWeight,
    }),
    ...(variant === 'body' && {
      color: theme.palette.text.primary,
    }),
    ...(variant === 'footer' && {
      color: theme.palette.text.secondary,
      lineHeight: 21,
      fontSize: 12,
    }),
    ...(size === 'sm' && {
      padding: '6px 16px',
    }),
    ...(align === 'left' && {
      textAlign: 'left',
    }),
    ...(align === 'center' && {
      textAlign: 'center',
    }),
    ...(align === 'right' && {
      textAlign: 'right',
      flexDirection: 'row-reverse',
    }),
    ...(align === 'justify' && {
      textAlign: 'justify',
    }),
    ...(sticky && {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default,
    }),
  }),
);

const tableCellClasses = {
  root: 'Rui-TableCell-root',
};

export const TableCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
  const {
    children,
    className,
    variant = 'body',
    disablePadding = false,
    align = 'center',
    size = 'md',
    sticky = false,
    ...rest
  } = props;

  return (
    <StyledTableCell
      className={cx(tableCellClasses.root, className)}
      variant={variant}
      disablePadding={disablePadding}
      align={align}
      size={size}
      sticky={sticky}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledTableCell>
  );
});
