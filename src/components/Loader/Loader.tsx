import { cx } from '@emotion/css';
import { css, keyframes } from '@mui/system';
import { forwardRef } from 'react';
import { styled } from '../../theme';

type StyleProps = {
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info';
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type Props = StyleProps & BaseProps;

const loaderClasses = {
  root: 'Rui-Loader-root',
  svg: 'Rui-Loader-svg',
  circle: 'Rui-Loader-circle',
};

const SIZE = 44;
const THICKNESS = 3.6;

const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

const StyledLoaderRoot = styled('span')<Required<StyleProps>>(
  ({ theme, color }) => ({
    display: 'inline-block',
    width: SIZE - 4,
    height: SIZE - 4,
    ...(color !== 'inherit' && {
      color: theme.palette[color].main,
    }),
  }),
  css`
    animation: ${circularRotateKeyframe} 1.4s linear infinite;
  `,
);

const StyledLoaderSVG = styled('svg')(() => ({
  display: 'block', // Keeps the progress centered
}));

const StyledLoaderCircle = styled('circle')(
  () => ({
    stroke: 'currentColor',
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0,
  }),
  css`
    animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
  `,
);

export const Loader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <StyledLoaderRoot
      className={cx(loaderClasses.root, className)}
      role="progressbar"
      {...rest}
      ref={ref}
    >
      <StyledLoaderSVG
        className={loaderClasses.svg}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <StyledLoaderCircle
          className={loaderClasses.circle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - THICKNESS) / 2}
          fill="none"
          strokeWidth={THICKNESS}
        />
      </StyledLoaderSVG>
    </StyledLoaderRoot>
  );
});
