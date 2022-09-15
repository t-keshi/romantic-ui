import { forwardRef } from 'react';
import { styled, Theme } from '../../theme';
import { cx } from '@emotion/css';

type StyleProps = {
  maxWidth?: keyof Theme['breakpoints'] | false;
  disablePadding?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

export const StyledContainer = styled('div')<Required<StyleProps>>(
  ({ theme, maxWidth, disablePadding }) => ({
    width: '100%',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    ...(!disablePadding && { paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3) }),
    maxWidth: maxWidth ? `${theme.breakpoints[maxWidth]}px` : 'auto',
  }),
);

const containerClasses = {
  root: 'Rui-Container-root',
};

export const Container = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, maxWidth = false, disablePadding = false, ...rest } = props;

  return (
    <StyledContainer
      className={cx(containerClasses.root, className)}
      maxWidth={maxWidth}
      disablePadding={disablePadding}
      {...rest}
      ref={ref}
    />
  );
});
