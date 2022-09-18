import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { alpha, lighten } from '@mui/system';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['thead'];

type Props = StyleProps & BaseProps;

const StyledTableHead = styled('thead')<Required<StyleProps>>(({ theme }) => ({
  display: 'table-header-group',
}));

const tableCellClasses = {
  root: 'Rui-TableHead-root',
};

export const TableHead = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledTableHead className={cx(tableCellClasses.root, className)} {...rest} ref={ref}>
      {children}
    </StyledTableHead>
  );
});
