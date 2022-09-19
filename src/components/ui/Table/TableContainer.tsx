import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const StyledTableContainer = styled('div')<Required<StyleProps>>(({ theme }) => ({
  width: '100%',
  overflowX: 'auto',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const tableContainerClasses = {
  root: 'Rui-TableContainer-root',
};

export const TableContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledTableContainer ref={ref} className={cx(tableContainerClasses.root, className)} {...rest}>
      {children}
    </StyledTableContainer>
  );
});
