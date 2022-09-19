import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';

type StyleProps = {
  hasDivider?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type Props = StyleProps & BaseProps;

export const dialogTitleClasses = {
  root: 'Rui-DialogTItle-root',
};

const StyledDialogTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.h4,
  padding: '16px',
  flex: '0 0 auto',
}));

export const DialogTitle = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <StyledDialogTitle
      as="h2"
      className={cx(dialogTitleClasses.root, className)}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledDialogTitle>
  );
});
