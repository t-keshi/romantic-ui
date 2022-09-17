import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['td'];

type Props = StyleProps & BaseProps;

const StyledTableCell = styled('td')<Required<StyleProps>>(({ theme }) => ({
  display: 'table-row-group',
}));

const tableCellClasses = {
  root: 'Rui-TableCell-root',
};

export const TableCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledTableCell ref={ref} className={cx(tableCellClasses.root, className)} {...rest}>
      {children}
    </StyledTableCell>
  );
});
