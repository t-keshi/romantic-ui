import { cx } from '@emotion/css';
import { FormControlUnstyledProps } from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { useSwitch, UseSwitchParameters } from '@mui/base/SwitchUnstyled';

type StyleProps = {
  size?: 'sm' | 'md';
  edge?: 'start' | 'end';
};

type BaseProps = {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onBlur?: React.FocusEventHandler;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler;
  onFocusVisible?: React.FocusEventHandler;
  readOnly?: boolean;
  required?: boolean;
} & JSX.IntrinsicElements['span'];

type Props = BaseProps & StyleProps;

const switchClasses = {
  root: 'Rui-Switch-root',
  thumb: 'Rui-Switch-thumb',
  input: 'Rui-Switch-input',
  checked: 'Rui-Switch-input-checked',
};

const StyledSwitchRoot = styled('span')<
  Required<Pick<StyleProps, 'size'>> & { edge: StyleProps['edge'] }
>(({ edge, size }) => ({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  verticalAlign: 'middle',
  '@media print': {
    colorAdjust: 'exact',
  },
  ...(edge === 'start' && {
    marginLeft: -8,
  }),
  ...(edge === 'end' && {
    marginRight: -8,
  }),
  ...(size === 'sm' && {
    width: 40,
    height: 24,
    padding: 7,
    [`& .${switchClasses.thumb}`]: {
      width: 16,
      height: 16,
    },
    [`& .${switchClasses.input}`]: {
      padding: 4,
      [`&.${switchClasses.checked}`]: {
        transform: 'translateX(16px)',
      },
    },
  }),
}));

const StyledFormSwitchInput = styled('input')(({ theme }) => ({
  margin: 0,
  opacity: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
}));

const StyledSwitchThumb = styled('input')(({ theme }) => ({
  boxShadow: theme.shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%',
}));

export const Switch = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    checked,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    size = 'md',
    edge,
    ...rest
  } = props;
  const { getInputProps } = useSwitch({
    checked,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
  });

  return (
    <StyledSwitchRoot
      className={cx(switchClasses.root, className)}
      size={size}
      edge={edge}
      {...rest}
      ref={ref}
    >
      <StyledSwitchThumb className={switchClasses.thumb} />
      <StyledFormSwitchInput
        className={cx(switchClasses.input, checked && switchClasses.checked)}
        {...getInputProps()}
        aria-label="Demo switch"
      />
    </StyledSwitchRoot>
  );
});
