import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';
import { alpha, lighten } from '@mui/system';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

type StyleProps = {
  variant?: 'head' | 'body' | 'footer';
  disablePadding?: boolean;
  align?: 'center' | 'left' | 'right' | 'justify';
  size?: 'sm' | 'md';
  sticky?: boolean;
  sortable?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  sorted?: 'asc' | 'desc';
} & JSX.IntrinsicElements['td'];

type Props = StyleProps & BaseProps;

const tableCellClasses = {
  root: 'Rui-TableCell-root',
  sortLabel: 'Rui-TableCell-sortLabel',
  sortLabelIcon: 'Rui-TableCell-sortLabelIcon',
};

const StyledTableCell = styled('td')<Required<StyleProps>>(
  ({ theme, variant, disablePadding, align, size, sticky, sortable }) => ({
    ...theme.typography.body2,
    display: 'table-cell',
    verticalAlign: 'inherit',
    textAlign: 'left',
    padding: disablePadding ? 0 : theme.spacing(1, 2),
    borderCollapse: 'collapse',
    border: `1px solid ${lighten(alpha(theme.palette.divider, 1), 0.88)}`,
    cellSpacing: 0,
    ...(variant === 'head' && {
      ...theme.typography.body1,
      padding: disablePadding ? 0 : theme.spacing(2, 2),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.h1.fontWeight,
    }),
    ...(variant === 'head' &&
      sortable && {
        userSelect: 'none',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
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

const StyledTableSortLabel = styled('span')(({ theme }) => ({
  ...theme.typography.body2,
  display: 'inline-flex',
  justifyContent: 'flex-start',
  flexDirection: 'inherit',
  alignItems: 'center',
}));

const StyledTableSortLabelIcon = styled('span')(() => ({
  fontSize: 14,
  marginRight: 4,
  marginLeft: 4,
}));

export const TableCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
  const {
    children,
    className,
    variant = 'body',
    disablePadding = false,
    align = 'left',
    size = 'md',
    sticky = false,
    sorted = undefined,
    sortable = false,
    ...rest
  } = props;
  const renderIcon = !sorted ? (
    <FaSort />
  ) : (
    {
      asc: <FaSortUp />,
      desc: <FaSortDown />,
    }[sorted]
  );

  return (
    <StyledTableCell
      className={cx(tableCellClasses.root, className)}
      variant={variant}
      disablePadding={disablePadding}
      align={align}
      size={size}
      sticky={sticky}
      sortable={sortable}
      {...rest}
      ref={ref}
    >
      {sortable ? (
        <StyledTableSortLabel className={tableCellClasses.root}>
          {children}
          {sortable && (
            <StyledTableSortLabelIcon className={tableCellClasses.sortLabelIcon}>
              {renderIcon}
            </StyledTableSortLabelIcon>
          )}
        </StyledTableSortLabel>
      ) : (
        children
      )}
    </StyledTableCell>
  );
});
