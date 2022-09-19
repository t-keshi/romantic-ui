import isPropValidEmotion from '@emotion/is-prop-valid';

export const isPropValid = (prop: PropertyKey) => {
  if (typeof prop !== 'string') return false;

  return isPropValidEmotion(prop);
};
