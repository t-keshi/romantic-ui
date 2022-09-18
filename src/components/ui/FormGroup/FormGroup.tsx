import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
} from '@mui/base';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { styled } from '../../../theme';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';

type StyleProps = {
  size?: 'sm' | 'md';
  row?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  inputRef?: React.Ref<any>;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  errorMessage?: string;
  helperText?: string;
  id?: JSX.IntrinsicElements['input']['id'];
} & Omit<FormControlUnstyledProps, 'error'>;

type Props = BaseProps & StyleProps;

const formGroupClasses = {
  root: 'Rui-FormGroup-root',
  label: 'Rui-FormGroup-label',
  asterisk: 'Rui-FormGroup-asterisk',
  input: 'Rui-FormGroup-input',
  helperText: 'Rui-FormGroup-helperText',
  errorMessage: 'Rui-FormGroup-errorMessage',
};

const StyledFormGroup = styled('div')<Required<Pick<StyleProps, 'row'>>>(({ row }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  ...(row && {
    flexDirection: 'row',
  }),
}));

export const FormGroup = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    label,
    errorMessage,
    helperText,
    disabled = false,
    required = false,
    onChange,
    defaultValue,
    value,
    id,
    size = 'md',
    row = false,
  } = props;

  return (
    <FormControlUnstyled
      className={cx(formGroupClasses.root, className)}
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
            <StyledFormLabel className={formGroupClasses.root} {...(id && { htmlFor: id })}>
              {label}
              {required && (
                <StyledAsterisk className={clsx(formGroupClasses.asterisk)}>
                  &thinsp;*
                </StyledAsterisk>
              )}
            </StyledFormLabel>
          )}
          <StyledFormGroup row={row}>{children}</StyledFormGroup>
          {helperText && (
            <StyledFormHelperText
              className={cx(
                formGroupClasses.helperText,
                disabled && formControlUnstyledClasses.disabled,
              )}
              size={size}
            >
              {helperText}
            </StyledFormHelperText>
          )}
          {errorMessage && (
            <StyledFormHelperText
              className={cx(formGroupClasses.errorMessage, formControlUnstyledClasses.error)}
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
