import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { Typography } from '../Typography/Typography';

type StyleProps = {};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const listItemTextClasses = {
  root: 'Rui-ListItemText-root',
  typography: 'Rui-ListItemText-typography',
};

const StyledListItem = styled('div')<Required<StyleProps>>(() => ({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
}));

const StyledListItemTypography = styled(Typography)<Required<StyleProps>>(() => ({
  display: 'block',
}));

export const ListItemText = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <StyledListItem ref={ref} className={cx(listItemTextClasses.root, className)} {...rest}>
      <StyledListItemTypography variant="body1">{children}</StyledListItemTypography>
    </StyledListItem>
  );
});
