import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
} from '@mui/base';
import { forwardRef } from 'react';
import { MdOutlineRadio, MdRadioButtonUnchecked } from 'react-icons/md';
import { styled } from '../../../theme';

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

const formRadioClasses = {
  root: 'Rui-FormRadio-root',
  label: 'Rui-FormRadio-label',
  asterisk: 'Rui-FormRadio-asterisk',
  input: 'Rui-FormRadio-input',
  helperText: 'Rui-FormRadio-helperText',
  errorMessage: 'Rui-FormRadio-errorMessage',
};

const StyledFormRadioRoot = styled('span')<Required<StyleProps>>(({ size }) => ({
  padding: 9,
  borderRadius: '50%',
}));

const StyledFormRadioInput = styled('input')(({ theme }) => ({
  margin: 0,
  opacity: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
}));

export const FormRadio = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
    <StyledFormRadioRoot className={cx(formRadioClasses.root, className)} size={size}>
      <StyledFormRadioInput
        className={formRadioClasses.input}
        ref={inputRef}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        type={'Radio'}
      />
      {checked ? <MdOutlineRadio /> : <MdRadioButtonUnchecked />}
    </StyledFormRadioRoot>
  );
});
