import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { createTransition } from '../../../util/createTransition';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
  hideSortIcon?: boolean;
  direction?: 'asc' | 'desc';
} & JSX.IntrinsicElements['button'];

type Props = StyleProps & BaseProps;

const tableSortLabelClasses = {
  root: 'Rui-TableSortLabel-root',
  active: 'Rui-TableSortLabel-active',
  icon: 'Rui-TableSortLabel-icon',
};

const StyledTableSortLabel = styled('button')(({ theme }) => ({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  flexDirection: 'inherit',
  alignItems: 'center',
  '&:focus': {
    color: theme.palette.text.secondary,
  },
  '&:hover': {
    color: theme.palette.text.secondary,
    [`& .${tableSortLabelClasses.icon}`]: {
      opacity: 0.5,
    },
  },
  [`&.${tableSortLabelClasses.active}`]: {
    color: theme.palette.text.primary,
    [`& .${tableSortLabelClasses.icon}`]: {
      opacity: 1,
      color: theme.palette.text.secondary,
    },
  },
}));

const StyledTableSortLabelIcon = styled('span')(({ theme }) => ({
  fontSize: 18,
  marginRight: 4,
  marginLeft: 4,
  opacity: 0,
  transition: createTransition(['opacity', 'transform'], {
    duration: 'shorter',
  }),
  userSelect: 'none',
}));

export const TableSortLabel = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, active = false, hideSortIcon = false, direction, ...rest } = props;
  const renderIcon = !direction ? (
    <FaSort />
  ) : (
    {
      asc: <FaSortUp />,
      desc: <FaSortDown />,
    }[direction]
  );

  return (
    <StyledTableSortLabel
      className={cx(tableSortLabelClasses.root, active && tableSortLabelClasses.active, className)}
      {...rest}
      ref={ref}
    >
      {children}
      {!hideSortIcon && (
        <StyledTableSortLabelIcon className={tableSortLabelClasses.icon}>
          {renderIcon}
        </StyledTableSortLabelIcon>
      )}
    </StyledTableSortLabel>
  );
});
