import { forwardRef } from 'react';
import { styled, Theme } from '../../theme';
import { cx } from '@emotion/css';

type StyleProps = {
  maxWidth?: keyof Theme['breakpoints']['values'] | false;
  disablePadding?: boolean;
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type Props = StyleProps & BaseProps;

export const StyledContainer = styled('div')<Required<StyleProps>>(
  ({ theme, maxWidth, disablePadding }) => ({
    width: '100%',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    ...(!disablePadding && { paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3) }),
    maxWidth: maxWidth ? `${theme.breakpoints.values[maxWidth]}px` : 'auto',
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
