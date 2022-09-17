import { cloneElement } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';

type FadeProps = {
  children: React.ReactElement;
  in?: boolean;
  timeout?:
    | {
        enter: number;
        exit: number;
      }
    | number;
  style?: TransitionProps['style'];
};

const defaultTimeout = 300;

export const Fade: React.FC<FadeProps> = (props) => {
  const { children, in: inProp = false, timeout = defaultTimeout, style, ...rest } = props;

  return (
    <Transition appear in={inProp} timeout={timeout} role="presentation" {...rest}>
      {(status: TransitionStatus) =>
        cloneElement(children, {
          style: {
            opacity: 0,
            transition: `opacity ${timeout}ms ease-in-out`,
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,
            ...((status === 'entering' || status === 'entered') && {
              opacity: 1,
            }),
            ...style,
          },
        })
      }
    </Transition>
  );
};
