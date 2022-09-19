import { cx } from '@emotion/css';
import { alpha } from '@mui/system';
import { forwardRef } from 'react';
import { styled, useTheme } from '../../../theme';

type StyleProps = {
  color?: 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success';
};

type BaseProps = {
  className?: string;
  header?: string;
  content?: React.ReactNode;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const messageClasses = {
  root: 'Rui-Message-root',
  header: 'Rui-Message-header',
  content: 'Rui-Message-contetn',
};

const StyledMessage = styled('div')<{ color: string }>(({ theme, color }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(color, 0.1),
  border: `1px solid ${alpha(color, 0.8)}`,
  padding: theme.spacing(2),
}));

const StyledMessageHeader = styled('h6')<{ color: string }>(({ theme, color }) => ({
  ...theme.typography.h6,
  color: alpha(color, 0.8),
}));

const StyledMessageContent = styled('p')<{ color: string }>(({ theme, color }) => ({
  ...theme.typography.body2,
  color: alpha(color, 0.8),
}));

export const Message = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, header, content, color = 'info', ...rest } = props;
  const theme = useTheme();
  const themeColor = {
    action: theme.palette.action.active,
    disabled: theme.palette.action.disabled,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
  }[color];

  return (
    <StyledMessage
      className={cx(messageClasses.root, className)}
      color={themeColor}
      {...rest}
      ref={ref}
    >
      {header && <StyledMessageHeader color={themeColor}>{header}</StyledMessageHeader>}
      {content && <StyledMessageContent color={themeColor}>{content}</StyledMessageContent>}
    </StyledMessage>
  );
});
