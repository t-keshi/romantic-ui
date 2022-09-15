import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['tbody'];

type Props = StyleProps & BaseProps;

const StyledTableBody = styled('tbody')<Required<StyleProps>>(({ theme }) => ({
  display: 'table-row-group',
}));

const tableBodyClasses = {
  root: 'Rui-TableBody-root',
};

export const TableBody = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledTableBody ref={ref} className={cx(tableBodyClasses.root, className)} {...rest}>
      {children}
    </StyledTableBody>
  );
});
