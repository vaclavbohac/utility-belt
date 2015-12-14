import { expect } from 'chai';

import { curry } from '../../index';

describe('curry', () => {

  const add = (a, b, c) => a + b + c;

  it('should return a function', () => {
    const actual = curry(() => {});

    expect(actual).to.be.a('function');
  });
  
  derscribe('input validations', () => {\

    [undefined, 'String.', 123].forEach((arg, index) => {
      it(`should throw an error if supplied argument is not a function (${index})`, () => {
        const actual = () => { curry(arg); };
    
        expect(actual).to.throw(Error);
        expect(actual).to.throw('Supplied argument is not a function.');
      });
    });

  });

  it('should return proper result when called with original number of arguments', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).to.equal(6);
  });

  it('should return a function when called with less than required number of arguments', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2)).to.be.a('function');
  });

  it('should return proper result when called with required number of arguments (or more)', () => {
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).to.equal(6);
    expect(curriedAdd(1, 2)(3)).to.equal(6);
    expect(curriedAdd(1)(2, 3, 4, 5)).to.equal(6);
  });

  it('should be possible to create multiple curried functions', () => {
    const curriedA = curry(add);
    const curriedB = curry(add);

    expect(curriedA).not.to.be(curriedB);

    expect(curriedA(1)(2)(3)).to.equal(6);
    expect(curriedB(1)(2)(3)).to.equal(6);
  });
});
