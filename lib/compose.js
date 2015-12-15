import { validate, isFunction } from './utils';

export default function compose(...functions) {
  const isValid = functions.length > 0 && validate(functions, isFunction);

  if (!isValid) {
    throw new Error('Supplied arguments are not functions.');
  }

  return (...args) => {
    return functions.reduceRight((previousResult, fn) => {
      return fn(previousResult);
    }, ...args);
  };
}
