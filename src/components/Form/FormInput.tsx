import { cx } from '@emotion/css';
import { InputUnstyled } from '@mui/base';
import clsx from 'clsx';
import { forwardRef, useRef } from 'react';
import { styled } from '../../theme';

type StyleProps = {
  size?: 'sm' | 'md';
};

type BaseProps = {
  className?: string;
  errorMessage?: string;
  inputRef?: React.Ref<any>;
} & JSX.IntrinsicElements['div'];

type Props = BaseProps & StyleProps;

const formInputClasses = {
  root: 'Rui-FormInput-root',
  errorMessage: 'Rui-FormInput-errorMessage',
};

const StyledFormInput = styled(InputUnstyled)<Required<StyleProps>>(({ theme, size }) => ({
  outline: 'none',
  font: 'inherit',
  letterSpacing: 'inherit',
  color: 'currentColor',
  boxSizing: 'content-box',
  background: 'none',
  height: '1.4375em',
  margin: 0,
  WebkitTapHighlightColor: 'transparent',
  display: 'block',
  minWidth: 0,
  border: `1px solid ${theme.palette.divider}`,
  '&:focus': {
    outline: `solid ${theme.palette.primary.main}`,
  },
  ...(size === 'sm' && {
    padding: '4px 0',
    textIndent: 14,
  }),
}));

export const FormInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, inputRef, errorMessage, size = 'md', ...rest } = props;

  return (
    <div ref={ref}>
      <StyledFormInput
        className={cx(formInputClasses.root, className)}
        size={size}
        {...rest}
        ref={inputRef}
      />
      {errorMessage && <p className={formInputClasses.errorMessage}>{errorMessage}</p>}
    </div>
  );
});
