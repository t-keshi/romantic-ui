import { cx } from '@emotion/css';
import { useFormControlUnstyledContext, useSwitch, UseSwitchParameters } from '@mui/base';
import { forwardRef } from 'react';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { styled } from '../../../theme';
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

const checkboxClasses = {
  root: 'Rui-Checkbox-root',
  label: 'Rui-Checkbox-label',
  asterisk: 'Rui-Checkbox-asterisk',
  input: 'Rui-Checkbox-input',
  helperText: 'Rui-Checkbox-helperText',
  errorMessage: 'Rui-Checkbox-errorMessage',
};

const StyledCheckboxRoot = styled('span')<Required<StyleProps>>(({ theme }) => ({
  position: 'relative',
  padding: '0px 8px',
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  '& > svg': {
    fontSize: 20,
    fontWeight: theme.typography.h4.fontWeight,
    color: theme.palette.text.secondary,
  },
}));

const StyledCheckboxInput = styled('input')(({ theme }) => ({
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

const StyledCheckboxLabel = styled(StyledFormLabel)(({ theme }) => ({
  marginBottom: 0,
  marginLeft: theme.spacing(1),
  lineHeight: '38px',
}));

export const Checkbox = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
    <StyledCheckboxRoot className={cx(checkboxClasses.root, className)} size={size}>
      <StyledCheckboxInput
        className={checkboxClasses.input}
        id={id}
        required={required}
        {...getInputProps()}
        ref={inputRef}
      />
      {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      {label && (
        <StyledCheckboxLabel className={checkboxClasses.root} {...(id && { htmlFor: id })}>
          {label}
          {required && (
            <StyledAsterisk className={checkboxClasses.asterisk}>&thinsp;*</StyledAsterisk>
          )}
        </StyledCheckboxLabel>
      )}
    </StyledCheckboxRoot>
  );
});
