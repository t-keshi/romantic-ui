import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
} from '@mui/base';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { styled } from '../../../theme';
import { StyledFormHelperText } from '../../internal/StyledFormHelperText';
import { StyledFormLabel } from '../../internal/StyledFormLabel';
import { StyledAsterisk } from '../../internal/StyledFormLabelAsterisk';

type StyleProps = {
  size?: 'sm' | 'md';
};

type BaseProps = {
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

const formCheckboxClasses = {
  root: 'Rui-FormCheckbox-root',
  label: 'Rui-FormCheckbox-label',
  asterisk: 'Rui-FormCheckbox-asterisk',
  input: 'Rui-FormCheckbox-input',
  helperText: 'Rui-FormCheckbox-helperText',
  errorMessage: 'Rui-FormCheckbox-errorMessage',
};

const StyledFormCheckboxRoot = styled('span')<Required<StyleProps>>(({ size }) => ({
  padding: 9,
  borderRadius: '50%',
}));

const StyledFormCheckboxInput = styled('input')(({ theme }) => ({
  margin: 0,
  opacity: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
}));

export const FormCheckbox = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    inputRef,
    checked = false,
    defaultChecked,
    size = 'md',
    disabled = false,
    required = false,
    id,
  } = props;

  return (
    <StyledFormCheckboxRoot className={cx(formCheckboxClasses.root, className)} size={size}>
      <StyledFormCheckboxInput
        className={formCheckboxClasses.input}
        ref={inputRef}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        type={'checkbox'}
      />
      {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
    </StyledFormCheckboxRoot>
  );
});
