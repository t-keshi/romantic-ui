import { cx } from '@emotion/css';
import {
  FormControlUnstyled,
  formControlUnstyledClasses,
  FormControlUnstyledProps,
  FormControlUnstyledState,
  useFormControlUnstyledContext,
  useSwitch,
  UseSwitchParameters,
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
  id?: JSX.IntrinsicElements['input']['id'];
  label?: string;
  errorMessage?: string;
  helperText?: string;
} & UseSwitchParameters;

type Props = BaseProps & StyleProps;

const formCheckboxClasses = {
  root: 'Rui-FormCheckbox-root',
  label: 'Rui-FormCheckbox-label',
  asterisk: 'Rui-FormCheckbox-asterisk',
  input: 'Rui-FormCheckbox-input',
  helperText: 'Rui-FormCheckbox-helperText',
  errorMessage: 'Rui-FormCheckbox-errorMessage',
};

const StyledFormCheckboxRoot = styled('span')<Required<StyleProps>>(({ theme }) => ({
  position: 'relative',
  padding: 9,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  '& > svg': {
    fontSize: 20,
    fontWeight: theme.typography.h4.fontWeight,
    color: theme.palette.text.secondary,
  },
}));

const StyledFormCheckboxInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
  cursor: 'pointer',
}));

const StyledFormCheckboxLabel = styled(StyledFormLabel)(({ theme }) => ({
  marginBottom: 0,
  marginLeft: theme.spacing(1),
  lineHeight: '38px',
}));

export const FormCheckbox = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const formControl = useFormControlUnstyledContext();
  const {
    className,
    inputRef,
    label,
    id,
    required = false,
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    size = 'md',
  } = props;
  const { getInputProps, checked } = useSwitch({
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur: formControl?.onBlur || onBlur,
    onChange: formControl?.onChange || onChange,
    onFocus: formControl?.onFocus || onFocus,
    onFocusVisible: onFocusVisible,
  });

  return (
    <StyledFormCheckboxRoot className={cx(formCheckboxClasses.root, className)} size={size}>
      <StyledFormCheckboxInput
        className={formCheckboxClasses.input}
        id={id}
        required={required}
        {...getInputProps()}
        ref={inputRef}
      />
      {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      {label && (
        <StyledFormCheckboxLabel className={formCheckboxClasses.root} {...(id && { htmlFor: id })}>
          {label}
          {required && (
            <StyledAsterisk className={formCheckboxClasses.asterisk}>&thinsp;*</StyledAsterisk>
          )}
        </StyledFormCheckboxLabel>
      )}
    </StyledFormCheckboxRoot>
  );
});
