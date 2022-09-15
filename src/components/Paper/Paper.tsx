import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled } from '../../theme';
import { createTransition } from '../../util/createTransition';

type StyleProps = {
  elevation?: 0 | 1 | 2 | 3;
  outlined?: boolean;
  square?: boolean;
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements['div'];

type Props = StyleProps & BaseProps;

const paperClasses = {
  root: 'Rui-Paper-root',
};

const StyledPaper = styled('div')<Required<StyleProps>>(
  ({ theme, elevation, outlined, square }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    transition: createTransition(['box-shadow']),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[elevation],
    ...(outlined && {
      border: `1px solid ${theme.palette.divider}`,
    }),
    ...(square && {
      borderRadius: 0,
    }),
  }),
);

export const Paper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, elevation = 0, outlined = true, square = false, ...rest } = props;

  return (
    <StyledPaper
      elevation={elevation}
      outlined={outlined}
      square={square}
      className={clsx(paperClasses.root, className)}
      {...rest}
      ref={ref}
    />
  );
});
