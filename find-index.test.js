const filterIndexFunction = require('./find-index');

describe('filter index function', () => {
    it('Takes an Array & callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', () => {

        const myArray = [1, 2, 3, 4, 6, 7]
        const newArray = filterIndexFunction(myArray, (x) => x % 2 === 0);
        

        expect(newArray).toEqual(1);
    });
});