import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  InputUnstyled,
  inputUnstyledClasses,
} from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';

type StyleProps = {
  size?: 'sm' | 'md';
  fullWidth?: boolean;
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

const StyledFormInput = styled(InputUnstyled)<Required<StyleProps>>(
  ({ theme, size, fullWidth }) => ({
    [`.${inputUnstyledClasses.input}`]: {
      outline: 'none',
      width: fullWidth ? '100%' : 320,
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,
      fontWeight: 400,
      color: theme.palette.text.primary,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      padding: '6px 12px',
      '&:focus': {
        outline: theme.palette.primary.main,
      },
      ...(size === 'sm' && {
        padding: '4px 0',
        textIndent: 14,
      }),
    },
  }),
);

export const FormInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    inputRef,
    label,
    id,
    errorMessage,
    helperText,
    value,
    defaultValue,
    onChange,
    required = false,
    disabled = false,
    size = 'md',
    fullWidth = false,
  } = props;

  return (
    <FormControlUnstyled
      className={cx(formInputClasses.root, className)}
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
      disabled={disabled}
      error={Boolean(errorMessage)}
    >
      {(props: FormControlUnstyledState) => (
        <>
          {label && (
            <StyledFormLabel className={formInputClasses.root} {...(id && { htmlFor: id })}>
              {label}
              {required && (
                <StyledAsterisk className={formInputClasses.asterisk}>&thinsp;*</StyledAsterisk>
              )}
            </StyledFormLabel>
          )}
          <StyledFormInput
            className={formInputClasses.input}
            ref={inputRef}
            id={id}
            size={size}
            fullWidth={fullWidth}
            {...props}
          />
          {helperText && (
            <StyledFormHelperText
              className={cx(
                formInputClasses.helperText,
                disabled && formControlUnstyledClasses.disabled,
              )}
              size={size}
              fullWidth={fullWidth}
            >
              {helperText}
            </StyledFormHelperText>
          )}
          {errorMessage && (
            <StyledFormHelperText
              className={cx(formInputClasses.errorMessage, formControlUnstyledClasses.error)}
              size={size}
              fullWidth={fullWidth}
            >
              {errorMessage}
            </StyledFormHelperText>
          )}
        </>
      )}
    </FormControlUnstyled>
  );
});
