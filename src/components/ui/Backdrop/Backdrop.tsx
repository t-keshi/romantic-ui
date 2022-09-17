import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { styled } from '../../../theme';

type StyleProps = {
  invisible?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  invisible?: boolean;
  isOpen?: boolean;
  onClose: () => void;
};

type Props = StyleProps & BaseProps;

const StyledBackdrop = styled('div')<Required<StyleProps>>(({ theme, invisible }) => ({
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  WebkitTapHighlightColor: 'transparent',
  zIndex: -100,
  ...(invisible ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgba(0, 0, 0, 0.5)' }),
}));

const backdropClasses = {
  root: 'Rui-Backdrop-root',
};

export const Backdrop = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, invisible = false, ...rest } = props;

  return (
    <StyledBackdrop
      ref={ref}
      className={cx(backdropClasses.root, className)}
      invisible={invisible}
      {...rest}
    />
  );
});
