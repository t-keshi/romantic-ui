import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { ModalUnstyledProps } from '@mui/base';
import { dialogTitleClasses } from './DialogTitle';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const dialogContentClasses = {
  root: 'Rui-Content-root',
};

const StyledDialogContent = styled('div')<Required<StyleProps>>(({ theme, hasDivider }) => ({
  flex: '1 1 auto',
  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  padding: hasDivider ? '16px 24px' : '20px 24px',
  ...(hasDivider
    ? {
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }
    : {
        [`.${dialogTitleClasses.root} + &`]: {
          paddingTop: 0,
        },
      }),
}));

export const DialogContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, hasDivider = true, ...rest } = props;

  return (
    <StyledDialogContent
      className={cx(dialogContentClasses.root, className)}
      hasDivider={hasDivider}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledDialogContent>
  );
});
