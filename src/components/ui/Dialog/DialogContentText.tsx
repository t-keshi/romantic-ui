import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyledProps } from '@mui/base';
import { dialogTitleClasses } from './DialogTitle';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const dialogContentClasses = {
  root: 'Rui-Content-root',
};

const StyledDialogContentText = styled('p')<Required<StyleProps>>(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
}));

export const DialogContentText = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledDialogContentText
      className={cx(dialogContentClasses.root, className)}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledDialogContentText>
  );
});
