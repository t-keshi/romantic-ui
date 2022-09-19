import { cx } from '@emotion/css';
import {
  ButtonUnstyled,
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  MenuItemUnstyledProps,
  MenuUnstyled,
  OptionUnstyledProps,
  SelectOption,
  SelectUnstyled,
  useSelect,
} from '@mui/base';
import clsx from 'clsx';
import React, { forwardRef, useRef } from 'react';
import { styled } from '../../../theme';
import { isPropValid } from '../../../util/isPropValid';
import { useAnchorEl } from '../../../util/useAnchorEl';
import { useToggle } from '../../../util/useToggle';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';
import { MenuItem } from '../Menu/MenuItem';
import { Select } from '../Select/Select';

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
  options?: {
    value: OptionUnstyledProps<string | number, 'li'>['value'];
    label: OptionUnstyledProps<string | number, 'li'>['label'];
  }[];
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

const StyledFormSelect = styled(MenuUnstyled)<Required<StyleProps>>(
  ({ theme, size, fullWidth }) => ({
    zIndex: 9999,
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
  }),
);

const StyledFormSelectButton = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<Required<StyleProps>>(({ theme, size, fullWidth }) => ({
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
}));

const StyledListbox = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
  outline: 0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

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
  const { anchorEl, onOpen, onClose, onToggle } = useAnchorEl();
  const { getButtonProps, getListboxProps, getOptionProps } = useSelect({
    buttonRef,
    listboxRef,
    options,
    open: Boolean(anchorEl),
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
          <Select options={options} />
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
