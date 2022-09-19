export const createTransition = (properties: string[]) => {
  return properties.map((property) => `${property} 100ms ease`).join(',');
};
