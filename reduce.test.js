const reduceFunction = require('./reduce');

describe('reduce function', () => {
    it('Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.', () => {
        const newArray = [1, 2, 3, 4, 5];

        const lastArr = reduceFunction(newArray, (a, b) => (a+b));

        expect(lastArr).toEqual(15);
    });
});