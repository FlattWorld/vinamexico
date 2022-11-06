export const safeClientFunction = (propFunction: Function) => {
  if (typeof window !== 'undefined') return propFunction();
};
