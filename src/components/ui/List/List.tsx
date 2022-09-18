import { cx } from '@emotion/css';
import { forwardRef } from 'react';
import { styled } from '../../../theme';
import { OverrideComponent, OverrideStyleProps } from '../../../util/utilityTypes';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type Props<TElementType extends React.ElementType = 'li'> = OverrideStyleProps<
  StyleProps,
  TElementType
> &
  BaseProps;

const listClasses = {
  root: 'Rui-List-root',
};

const StyledList = styled('span')<Required<StyleProps>>(() => ({
  listStyle: 'none',
  margin: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
}));

export const renderFunction = <TElementType extends React.ElementType = 'ul'>(
  props: Props<TElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
) => {
  const { children, className, as = 'ul', ...rest } = props;
  const ListElement = StyledList.withComponent(as);

  return (
    <ListElement className={cx(listClasses.root, className)} {...rest} ref={ref}>
      {children}
    </ListElement>
  );
};

export const List = forwardRef(renderFunction) as OverrideComponent<StyleProps, 'ul'>;
