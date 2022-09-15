import { forwardRef } from 'react';
import { cx } from '@emotion/css';
import { Toolbar } from './Toolbar';
import { AppBar } from './AppBar';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = BaseProps & StyleProps;

const headerClasses = {
  root: 'Rui-Header-root',
};

export const Header = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={cx(headerClasses.root, className)} {...rest}>
      <AppBar>
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
});
