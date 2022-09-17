import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';
import { Typography } from '../Typography/Typography';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type Props = StyleProps & BaseProps;

export const dialogActionsClasses = {
  root: 'Rui-DialogActions-root',
};

const StyledDialogActions = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: 8,
  justifyContent: 'flex-end',
  flex: '0 0 auto',
  '& > :not(:first-of-type)': {
    marginLeft: 8,
  },
}));

export const DialogActions = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledDialogActions className={cx(dialogActionsClasses.root, className)} {...rest} ref={ref}>
      {children}
    </StyledDialogActions>
  );
});
