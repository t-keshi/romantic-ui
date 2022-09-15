import clsx from 'clsx';
import { forwardRef } from 'react';
import { styled } from '../../theme';

type StyleProps = {};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  required?: boolean;
} & JSX.IntrinsicElements['label'];

type Props = StyleProps & BaseProps;

const labelClasses = {
  root: 'Rui-Label-root',
  asterisk: 'Rui-Label-asterisk',
};

export const StyledLabel = styled('label')(({ theme }) => ({
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  color: theme.palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  marginBottom: theme.spacing(1),
}));

export const StyledAsterisk = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const FormLabel = forwardRef<HTMLLabelElement, Props>((props, ref) => {
  const { className, children, required = false, ...rest } = props;

  return (
    <label ref={ref} className={clsx(labelClasses.root, className)} {...rest}>
      {children}
      {required && (
        <StyledAsterisk className={clsx(labelClasses.asterisk)}>&thinsp;*</StyledAsterisk>
      )}
    </label>
  );
});
