import { cx } from '@emotion/css';
import { TabUnstyled } from '@mui/base';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { useTab, UseTabParameters } from '@mui/base/TabUnstyled';
import { isPropValid } from '../../../util/isPropValid';

type StyleProps = {
  textColor?: string;
  fullWidth?: boolean;
};

type BaseProps = {
  label: string;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  indicator?: React.ReactNode;
} & (
  | {
      startIcon: React.ReactNode;
      endIcon?: never;
    }
  | {
      startIcon: never;
      endIcon?: React.ReactNode;
    }
  | {
      startIcon?: never;
      endIcon?: never;
    }
) &
  UseTabParameters;

type Props = StyleProps & BaseProps;

const tabClasses = {
  root: 'Rui-Tab-root',
  selected: 'Rui-Tab-selected',
  disabled: 'Rui-Tab-head',
  startIcon: 'Rui-Tab-startIcon',
  endIcon: 'Rui-Tab-endIcon',
};

const StyledTab = styled(TabUnstyled, { shouldForwardProp: (prop) => isPropValid(prop) })<
  Required<StyleProps> & { iconPosition: null | 'start' | 'end' }
>(({ theme, fullWidth, iconPosition, textColor }) => ({
  ...theme.typography.button,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 360,
  minWidth: 90,
  position: 'relative',
  minHeight: 52,
  flexShrink: 0,
  padding: '12px 16px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  flexDirection: 'row',
  lineHeight: 1.25,
  paddingTop: 9,
  paddingBottom: 9,
  ...(iconPosition === 'start' && {
    marginRight: theme.spacing(1),
  }),
  ...(iconPosition === 'end' && {
    marginLeft: theme.spacing(1),
  }),
  ...(textColor === 'inherit' && {
    color: 'inherit',
    opacity: 0.6,
    [`&.${tabClasses.selected}`]: {
      opacity: 1,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.action.selected,
    },
    [`&.${tabClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity,
    },
  }),
  ...(textColor === 'primary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.action.selected,
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  }),
  ...(textColor === 'secondary' && {
    color: theme.palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.action.selected,
    },
    [`&.${tabClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  }),
  ...(fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none',
  }),
}));

const StyledTabStartIcon = styled('span')(() => ({
  marginRight: 4,
}));

const StyledTabEndIcon = styled('span')(() => ({
  display: 'inherit',
  marginLeft: 4,
}));

const StyledTabIndicator = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  height: 2,
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.primary.main,
}));

export const Tab = forwardRef<HTMLButtonElement, Props>((props, _) => {
  const {
    className,
    label,
    fullWidth = false,
    textColor = 'inherit',
    disabled = false,
    startIcon,
    endIcon,
    ...rest
  } = props;
  const { selected, getRootProps } = useTab({
    ...rest,
  });

  const hasIcon = startIcon || endIcon;
  const iconPosition = hasIcon ? null : startIcon && !endIcon ? 'start' : 'end';
  const classes = [
    tabClasses,
    selected && tabClasses.selected,
    disabled && tabClasses.disabled,
  ].filter((item) => Boolean(item)) as string[];
  const renderStartIcon = startIcon && <StyledTabStartIcon>{startIcon}</StyledTabStartIcon>;
  const renderEndIcon = endIcon && <StyledTabEndIcon>{endIcon}</StyledTabEndIcon>;
  const indicator = selected && <StyledTabIndicator />;

  return (
    <StyledTab
      className={cx(classes, className)}
      fullWidth={fullWidth}
      textColor={textColor}
      tabIndex={selected ? 0 : -1}
      iconPosition={iconPosition}
      {...rest}
      {...getRootProps()}
    >
      {renderStartIcon}
      {label}
      {renderEndIcon}
      {indicator}
    </StyledTab>
  );
});
