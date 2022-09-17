import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { alpha } from '@mui/system';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  selected?: boolean;
} & JSX.IntrinsicElements['tr'];

type Props = StyleProps & BaseProps;

const tableRowClasses = {
  root: 'Rui-TableRow-root',
  hover: 'Rui-TableRow-hover',
  selected: 'Rui-TableRow-selected',
  head: 'Rui-TableRow-head',
};

const StyledTableCell = styled('tr')<Required<StyleProps>>(({ theme }) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: theme.palette.action.hover,
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
      ),
    },
  },
}));

export const TableRow = forwardRef<HTMLTableRowElement, Props>((props, ref) => {
  const { children, className, hover = false, selected = false, ...rest } = props;
  const classes = [
    tableRowClasses,
    hover && tableRowClasses.hover,
    selected && tableRowClasses.selected,
  ].filter((item) => Boolean(item)) as string[];

  return (
    <StyledTableCell ref={ref} className={cx(...classes, className)} {...rest}>
      {children}
    </StyledTableCell>
  );
});
