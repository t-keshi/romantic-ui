import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  MenuItemUnstyledProps,
  SelectOption,
  SelectUnstyled,
  useSelect,
} from '@mui/base';
import clsx from 'clsx';
import { forwardRef, useRef } from 'react';
import { styled } from '../../../theme';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';
import { MenuItem } from '../Menu/MenuItem';

type StyleProps = {
  size?: 'sm' | 'md';
};

type BaseProps = {
  className?: string;
  SelectRef?: React.Ref<any>;
  label?: string;
  errorMessage?: string;
  helperText?: string;
  id?: JSX.IntrinsicElements['input']['id'];
  options?: { value: MenuItemUnstyledProps['value']; label: MenuItemUnstyledProps['label'] }[];
  placeholder?: string;
} & Omit<FormControlUnstyledProps, 'error'>;

type Props = BaseProps & StyleProps;

const formSelectClasses = {
  root: 'Rui-FormSelect-root',
  label: 'Rui-FormSelect-label',
  asterisk: 'Rui-FormSelect-asterisk',
  Select: 'Rui-FormSelect-Select',
  helperText: 'Rui-FormSelect-helperText',
  errorMessage: 'Rui-FormSelect-errorMessage',
};

const StyledFormSelect = styled('ul')<Required<StyleProps>>(({ theme, size }) => ({
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

export const FormSelect = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    SelectRef,
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
    options = [],
    placeholder,
  } = props;
  const listboxRef = useRef<HTMLUListElement>(null);
  const {
    getButtonProps,
    getListboxProps,
    getOptionProps,
    value: selectValue,
  } = useSelect({
    listboxRef,
    options,
  });

  return (
    <FormControlUnstyled
      className={cx(formSelectClasses.root, className)}
      ref={ref}
      disabled={disabled}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    >
      {(_: FormControlUnstyledState) => (
        <>
          {label && (
            <StyledFormLabel className={formSelectClasses.root} {...(id && { htmlFor: id })}>
              {label}
              {required && (
                <StyledAsterisk className={formSelectClasses.asterisk}>&thinsp;*</StyledAsterisk>
              )}
            </StyledFormLabel>
          )}
          <button type="button" {...getButtonProps()}>
            {<span className="placeholder">{placeholder ?? ' '}</span>}
          </button>
          <StyledFormSelect size={size} {...getListboxProps()}>
            {options.map((option) => {
              if (typeof option.value === 'object') {
                return null;
              }
              return (
                <MenuItem key={option.value ?? ''} {...getOptionProps(option)}>
                  {option.label}
                </MenuItem>
              );
            })}
          </StyledFormSelect>
          {helperText && (
            <StyledFormHelperText
              className={cx(
                formSelectClasses.helperText,
                disabled && formControlUnstyledClasses.disabled,
              )}
              size={size}
            >
              {helperText}
            </StyledFormHelperText>
          )}
          {errorMessage && (
            <StyledFormHelperText
              className={cx(formSelectClasses.errorMessage, formControlUnstyledClasses.error)}
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
