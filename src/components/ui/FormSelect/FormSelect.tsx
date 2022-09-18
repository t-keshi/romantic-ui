import { cx } from '@emotion/css';
import {
  ButtonUnstyled,
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
import { useToggle } from '../../../util/useToggle';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';
import { MenuItem } from '../Menu/MenuItem';

type StyleProps = {
  size?: 'sm' | 'md';
  fullWidth?: boolean;
};

type BaseProps = {
  className?: string;
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

const StyledFormSelect = styled('ul')<Required<StyleProps>>(({ theme, size, fullWidth }) => ({
  outline: 'none',
  font: 'inherit',
  letterSpacing: 'inherit',
  color: 'currentColor',
  boxSizing: 'content-box',
  background: 'none',
  margin: 0,
  WebkitTapHighlightColor: 'transparent',
  display: 'block',
  minWidth: 0,
  border: `1px solid ${theme.palette.divider}`,
  width: fullWidth ? '100%' : 318,
  '&:focus': {
    outline: 'none',
  },
  ...(size === 'sm' && {
    padding: '4px 0',
    textIndent: 14,
  }),
}));

const StyledFormSelectButton = styled(ButtonUnstyled)<Required<StyleProps>>(
  ({ theme, size, fullWidth }) => ({
    display: 'inline-flex',
    outline: 'none',
    width: fullWidth ? '100%' : 320,
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: 12,
    '&:focus': {
      outline: theme.palette.primary.main,
    },
    ...(size === 'sm' && {
      padding: '4px 0',
      textIndent: 14,
    }),
  }),
);

export const FormSelect = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
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
    options = [],
    placeholder,
    size = 'md',
    fullWidth = false,
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const [open, toggleOpen] = useToggle(false);
  const { getButtonProps, getListboxProps, getOptionProps } = useSelect({
    buttonRef,
    listboxRef,
    options,
    onOpenChange: toggleOpen,
    open: open,
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
          <StyledFormSelectButton size={size} fullWidth={fullWidth} {...getButtonProps()}>
            {placeholder || '　'}
          </StyledFormSelectButton>
          {open && (
            <StyledFormSelect size={size} fullWidth={fullWidth} {...getListboxProps()}>
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
          )}
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
