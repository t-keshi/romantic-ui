import { cx } from '@emotion/css';
import { useFormControlUnstyledContext, useSwitch, UseSwitchParameters } from '@mui/base';
import { forwardRef } from 'react';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import { styled } from '../../../theme';
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
} & UseSwitchParameters;

type Props = BaseProps & StyleProps;

const formRadioClasses = {
  root: 'Rui-FormRadio-root',
  label: 'Rui-FormRadio-label',
  asterisk: 'Rui-FormRadio-asterisk',
  input: 'Rui-FormRadio-input',
  helperText: 'Rui-FormRadio-helperText',
  errorMessage: 'Rui-FormRadio-errorMessage',
};

const StyledFormRadioRoot = styled('span')<Required<StyleProps>>(({ theme }) => ({
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

const StyledFormRadioInput = styled('input')(() => ({
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

const StyledFormRadioLabel = styled(StyledFormLabel)(({ theme }) => ({
  marginBottom: 0,
  marginLeft: theme.spacing(1),
  lineHeight: '38px',
}));

export const FormRadio = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
    <StyledFormRadioRoot className={cx(formRadioClasses.root, className)} size={size}>
      <StyledFormRadioInput
        className={formRadioClasses.input}
        id={id}
        required={required}
        {...getInputProps()}
        ref={inputRef}
      />
      {checked ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />}
      {label && (
        <StyledFormRadioLabel className={formRadioClasses.root} {...(id && { htmlFor: id })}>
          {label}
          {required && (
            <StyledAsterisk className={formRadioClasses.asterisk}>&thinsp;*</StyledAsterisk>
          )}
        </StyledFormRadioLabel>
      )}
    </StyledFormRadioRoot>
  );
});
