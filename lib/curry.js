import { isFunction } from './utils';

export default function curry(fn) {
  if (!isFunction(fn)) {
    throw new Error('Supplied argument is not a function.');
  }

  const createCurry = (...boundArgs) => {
    return (...currentArgs) => {
      const args = [...boundArgs, ...currentArgs];

      return args.length < fn.length ? createCurry(...args) : fn(...args);
    };
  };

  return createCurry();
}
