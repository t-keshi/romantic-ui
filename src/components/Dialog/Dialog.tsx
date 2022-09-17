import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';
import { Backdrop } from '../Backdrop/Backdrop';

type StyleProps = {
  direction?: 'row' | 'column';
  spacing?: number;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & ModalUnstyledProps;

type Props = StyleProps & BaseProps;

const StyledModal = styled(ModalUnstyled)<StyleProps>(({ theme, open }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  ...(open && { visibility: 'hidden' }),
}));

const modalClasses = {
  root: 'Rui-Modal-root',
};

export const Dialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, open = false, onClose, ...rest } = props;

  return (
    <StyledModal
      className={cx(modalClasses.root, className)}
      components={{ Backdrop }}
      open={open}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledModal>
  );
});
