import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  InputUnstyled,
} from '@mui/base';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled } from '../../theme';
import { StyledFormHelperText } from '../internal/StyledFormHelperText';
import { StyledFormLabel } from '../internal/StyledFormLabel';
import { StyledAsterisk } from '../internal/StyledFormLabelAsterisk';

type StyleProps = {
  size?: 'sm' | 'md';
};

type BaseProps = {
  className?: string;
  inputRef?: React.Ref<any>;
  label?: string;
  errorMessage?: string;
  helperText?: string;
  id?: JSX.IntrinsicElements['input']['id'];
} & Omit<FormControlUnstyledProps, 'error'>;

type Props = BaseProps & StyleProps;

const formInputClasses = {
  root: 'Rui-FormInput-root',
  label: 'Rui-FormInput-label',
  asterisk: 'Rui-FormInput-asterisk',
  input: 'Rui-FormInput-input',
  helperText: 'Rui-FormInput-helperText',
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
  const {
    className,
    inputRef,
    label,
    errorMessage,
    helperText,
    size = 'md',
    disabled = false,
    required = false,
    onChange,
    defaultValue,
    value,
    id,
  } = props;

  return (
    <FormControlUnstyled
      ref={ref}
      disabled={disabled}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    >
      {(props: FormControlUnstyledState) => (
        <>
          {label && (
            <StyledFormLabel className={formInputClasses.root} {...(id && { htmlFor: id })}>
              {label}
              {required && (
                <StyledAsterisk className={clsx(formInputClasses.asterisk)}>
                  &thinsp;*
                </StyledAsterisk>
              )}
            </StyledFormLabel>
          )}
          <StyledFormInput
            className={cx(formInputClasses.root, className)}
            size={size}
            ref={inputRef}
            disabled={props.disabled}
            required={props.required}
            onChange={props.onChange}
            value={props.value}
            id={id}
          />
          {helperText && (
            <StyledFormHelperText
              className={cx(
                formInputClasses.helperText,
                disabled && formControlUnstyledClasses.disabled,
              )}
              size={size}
            >
              {helperText}
            </StyledFormHelperText>
          )}
          {errorMessage && (
            <StyledFormHelperText
              className={cx(formInputClasses.errorMessage, formControlUnstyledClasses.error)}
              size={size}
            >
              {errorMessage}
            </StyledFormHelperText>
          )}
        </>
      )}
    </FormControlUnstyled>
  );
});
