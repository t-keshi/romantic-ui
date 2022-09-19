import {
  ButtonUnstyled,
  buttonUnstyledClasses,
  OptionUnstyled,
  optionUnstyledClasses,
  OptionUnstyledProps,
  PopperUnstyled,
  SelectOption,
  SelectUnstyled,
  SelectUnstyledProps,
} from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { isPropValid } from '../../../util/isPropValid';
import { Typography } from '../Typography/Typography';

type StyleProps = {
  size?: 'sm' | 'md';
  fullWidth?: boolean;
};

type BaseProps = {
  className?: string;
  options: {
    label: OptionUnstyledProps<string | number>['label'];
    value: OptionUnstyledProps<string | number>['value'];
  }[];
} & SelectUnstyledProps<string | number>;

type Props = BaseProps & StyleProps;

const formSelectClasses = {
  root: 'Rui-FormSelect-root',
  label: 'Rui-FormSelect-label',
  asterisk: 'Rui-FormSelect-asterisk',
  Select: 'Rui-FormSelect-Select',
  helperText: 'Rui-FormSelect-helperText',
  errorMessage: 'Rui-FormSelect-errorMessage',
};

const StyledSelectButton = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<Required<StyleProps>>(({ theme, size, fullWidth }) => ({
  ...theme.typography.body2,
  width: fullWidth ? '100%' : 320,
  display: 'inline-flex',
  outline: 'none',
  color: theme.palette.text.primary,
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: '6px 12px',
  '&:focus': {
    outline: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '&.focusVisible': {
    outline: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '&.Mui-expanded': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  ...(size === 'sm' && {
    padding: '4px 0',
    textIndent: 14,
  }),
}));

const StyledListbox = styled('ul')<Required<StyleProps>>(({ theme, fullWidth }) => ({
  width: fullWidth ? '100%' : 320,
  overflow: 'hidden',
  listStyle: 'none',
  margin: 0,
  position: 'relative',
  outline: 0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

const StyledOption = styled(OptionUnstyled)(({ theme }) => ({
  listStyle: 'none',
  padding: '6px 12px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  '[&:last-of-type]': {
    borderBottom: 'none',
  },
  [`&.${optionUnstyledClasses.selected}`]: {
    backgroundColor: theme.palette.action.selected,
  },
  [`&.${optionUnstyledClasses.disabled}`]: {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
  [`&:hover:not(.${optionUnstyledClasses.disabled}, .${optionUnstyledClasses.selected})`]: {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Popper = styled(PopperUnstyled)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1,
}));

const renderValue = (option: SelectOption<string | number> | null) => {
  if (option == null) {
    return (
      <Typography as="span" variant="body2">
        選択してください
      </Typography>
    );
  }

  return (
    <Typography as="span" variant="body2">
      {option.label}
    </Typography>
  );
};

export const Select = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { options, listboxOpen, ...rest } = props;
  const components = {
    Popper,
    Root: StyledSelectButton,
    Listbox: StyledListbox,
  };

  return (
    <SelectUnstyled
      components={components}
      componentsProps={{ root: { className: listboxOpen ? '' : 'open' } }}
      renderValue={renderValue}
      listboxOpen={listboxOpen}
      {...rest}
      ref={ref}
    >
      {options.map((option) => (
        <StyledOption key={option.value} label={option.label} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </SelectUnstyled>
  );
});
