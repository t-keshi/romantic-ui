import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { Typography } from '../Typography/Typography';

type StyleProps = {
  inset?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

export const listItemTextClasses = {
  root: 'Rui-ListItemText-root',
  inset: 'Rui-ListItemText-inset',
  typography: 'Rui-ListItemText-typography',
};

const StyledListItemTextRoot = styled('div')<Required<StyleProps>>(({ inset }) => ({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  ...(inset && {
    paddingLeft: 56,
  }),
}));

const StyledListItemTypography = styled(Typography)(() => ({
  display: 'block',
}));

export const ListItemText = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, inset = false, ...rest } = props;

  return (
    <StyledListItemTextRoot
      ref={ref}
      className={cx(listItemTextClasses.root, className)}
      inset={inset}
      {...rest}
    >
      <StyledListItemTypography variant="body1">{children}</StyledListItemTypography>
    </StyledListItemTextRoot>
  );
});
