import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';

type StyleProps = {
  stickyHeader?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['table'];

type Props = StyleProps & BaseProps;

const StyledTable = styled('table')<Required<StyleProps>>(({ theme, stickyHeader }) => ({
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& caption': {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'left',
    captionSide: 'bottom',
  },
  ...(stickyHeader && {
    borderCollapse: 'separate',
  }),
}));

const tableClasses = {
  root: 'Rui-Table-root',
};

export const Table = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const { children, className, stickyHeader = true, ...rest } = props;

  return (
    <StyledTable
      ref={ref}
      className={cx(tableClasses.root, className)}
      stickyHeader={stickyHeader}
      {...rest}
    >
      {children}
    </StyledTable>
  );
});
