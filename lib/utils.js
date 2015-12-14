export const isFunction = (value) => {
  return typeof value === 'function';
};

export const validate = (args, ...validators) => {
  // Map each validator function over each argument that
  // needs to be validated
  const results = args.map((arg) => {
    // Map each validator over current argument and return
    // single boolean value
    return validators.reduce((previousResult, validator, index) => {
      // previousResult is validator function on first iteration
      if (index === 1) return previousResult(arg);
      return (previousResult && validator(arg));
    }, true);
  });

  // Reduce results for each argument to single boolean value
  return results.reduce((previousResult, currentResult) => {
    return (previousResult && currentResult);
  }, true);
};
