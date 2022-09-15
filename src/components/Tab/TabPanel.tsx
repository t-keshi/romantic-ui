import { cx } from '@emotion/css';
import { forwardRef } from 'react';

type StyleProps = {};

type BaseProps = {
  className: string;
  children?: React.ReactNode;
  index: number;
  value: number;
};

type Props = StyleProps & BaseProps;

const tabPanelClasses = {
  root: 'Rui-TabPanel-root',
};

export const TabPanel = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, value, index, ...other } = props;

  return (
    <button
      className={cx(tabPanelClasses.root, className)}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      ref={ref}
    >
      {value === index ? children : null}
    </button>
  );
});
