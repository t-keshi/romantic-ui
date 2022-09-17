import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  InputUnstyled,
  InputUnstyledProps,
} from '@mui/base';
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';
import { styled } from '../../theme';
import { Classes } from '../../util/utilityTypes';
import { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';

type StyleProps = {
  size?: 'sm' | 'md';
};

type InputClasses = Classes<'root'>;

type BaseProps = {
  overrideClasses?: InputClasses;
  className?: string;
} & InputUnstyledProps;

type Props = BaseProps & StyleProps;

const resolveClasses = (overrideClasses?: InputClasses) => ({
  root: overrideClasses?.root || 'Rui-FormInput-root',
});

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

export const Input = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { overrideClasses, className, size = 'md', ...rest } = props;
  const inputClasses = useMemo(() => resolveClasses(overrideClasses), [overrideClasses]);

  return (
    <StyledFormInput className={cx(inputClasses.root, className)} size={size} {...rest} ref={ref} />
  );
});
