import { forwardRef } from 'react';
import { styled } from '../../theme';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { cx } from '@emotion/css';

type StyleProps = {
  size?: 'sm' | 'md' | 'lg';
};

type BaseProps = {
  className?: string;
  src?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const avatarClasses = {
  root: 'Rui-Avatar-root',
};

const StyledAvatar = styled('div')<StyleProps>(({ size }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: 20,
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  ...(size === 'sm' && {
    width: 32,
    height: 32,
  }),
  ...(size === 'md' && {
    width: 40,
    height: 40,
  }),
  ...(size === 'lg' && {
    width: 48,
    height: 48,
  }),
}));

const StyledAvatarImage = styled('img')({
  objectFit: 'contain',
  height: 'auto',
  width: '100%',
});

export const Avatar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, src, size = 'md', ...rest } = props;

  return (
    <StyledAvatar className={cx(avatarClasses.root, className)} size={size} {...rest} ref={ref}>
      {src ? <StyledAvatarImage src={src} alt="Avatar" /> : <MdOutlineAccountCircle />}
    </StyledAvatar>
  );
});
