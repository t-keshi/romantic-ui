import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../theme';
import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';
import { Fade } from '../Fade/Fade';
import { MdClose } from 'react-icons/md';

type StyleProps = {
  open?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  spacing?: number;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & ModalUnstyledProps;

type Props = StyleProps & BaseProps;

const dialogClasses = {
  root: 'Rui-Dialog-root',
  container: 'Rui-Dialog-container',
  paper: 'Rui-Dialog-paper',
  closeIcon: 'Rui-Dialog-closeIcon',
};

const StyledModal = styled(ModalUnstyled)<Required<Pick<StyleProps, 'open'>>>(
  ({ theme, open }) => ({
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    ...(open && { visibility: 'hidden' }),
  }),
);

const StyledBackdrop = styled('div')<Required<StyleProps>>(({ theme }) => ({
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  WebkitTapHighlightColor: 'transparent',
  zIndex: -100,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}));

const StyledCloseIcon = styled('button')(({ theme }) => ({
  display: 'flex',
  outline: 'none',
  border: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: theme.spacing(1),
  cursor: 'pointer',
  position: 'absolute',
  top: '-2.5rem',
  right: '-2.5rem',
  zIndex: 1,
  opacity: 0.8,
  fontSize: '1.25em',
  color: '#fff',
  width: '2.25rem',
  height: '2.25rem',
}));

const StyledDialogContainer = styled('div')(({ theme }) => ({
  height: '100%',
  '@media print': {
    height: 'auto',
  },
  outline: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledDialogPaper = styled('div')<{ maxWidth: 'sm' | 'lg' | 'md' | false }>(
  ({ theme, maxWidth }) => ({
    margin: 32,
    position: 'relative',
    overflowY: 'auto',
    '@media print': {
      overflowY: 'visible',
      boxShadow: 'none',
    },
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 64px)',
    maxWidth: maxWidth ? `${theme.breakpoints.values[maxWidth]}px` : 'calc(100% - 64px)',
  }),
);

export const Dialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    open = false,
    maxWidth = false,
    onClose = () => {},
    ...rest
  } = props;

  return (
    <StyledModal
      className={cx(dialogClasses.root, className)}
      components={{ Backdrop: StyledBackdrop }}
      open={open}
      closeAfterTransition
      {...rest}
      ref={ref}
    >
      <Fade in={open}>
        <StyledDialogContainer className={dialogClasses.container}>
          <StyledDialogPaper className={dialogClasses.paper} maxWidth={maxWidth}>
            <StyledCloseIcon onClick={(e) => onClose(e, 'backdropClick')}>
              <MdClose />
            </StyledCloseIcon>
            {children}
          </StyledDialogPaper>
        </StyledDialogContainer>
      </Fade>
    </StyledModal>
  );
});
