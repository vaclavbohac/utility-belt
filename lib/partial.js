import { isFunction } from './utils';

export default function partial(fn, ...boundArgs) {
  if (!isFunction(fn)) {
    throw new Error('First argument is not a function.');
  }

  return (...currentArgs) => {
    const args = [...boundArgs, ...currentArgs];

    return fn(...args);
  };
}
