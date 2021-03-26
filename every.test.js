const everyFunction = require('./every');

describe('every function', () => {
    it('Takes an Array and callback of signature item => {} and returns an overall FALSE value if all callback return true or a truthy value.', () => {
        const myArray = [2, 3, 4, 6];
        const newArr = everyFunction(myArray, (n) => n > 10);
        

        expect(newArr).toEqual(false);
    });

        it('Takes an Array and callback of signature item => {} and returns an overall TRUE value if all callback return true or a truthy value.', () => {
        const myArray = [12, 11, 16, 18];
        const newArr = everyFunction(myArray, (n) => n > 10);
        

        expect(newArr).toEqual(true);
    });
});
