const expect = require('chai').expect;

exports.default = (
  testDescription,
  func,
  argsArray,
  expected,
  test
) => {
  test(testDescription, () => {
    return func.apply(null, argsArray)
      .then(actual => {
        expect(actual).to.eql(eval(`var trouble = ${expected}; trouble`));
      });
  });
};