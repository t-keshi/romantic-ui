import { forwardRef } from 'react';
import { PopperUnstyled, PopperUnstyledProps } from '@mui/base';
import { createTransition } from '../../../util/createTransition';
import { styled } from '../../../theme';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
} & PopperUnstyledProps;

type Props = StyleProps & BaseProps;

const PopperPaper = styled('div')<Required<StyleProps>>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: createTransition(['box-shadow']),
  borderRadius: theme.shape.borderRadius,
  position: 'absolute',
  overflowY: 'auto',
  overflowX: 'hidden',
  minWidth: 16,
  minHeight: 16,
  maxWidth: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  outline: 0,
}));

const popoverClasses = {
  root: 'Rui-Popover-root',
  paper: 'Rui-Popover-paper',
};

export const Popper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <PopperUnstyled ref={ref} className={popoverClasses.root} {...rest}>
      <PopperPaper className={popoverClasses.paper}>{children}</PopperPaper>
    </PopperUnstyled>
  );
});
