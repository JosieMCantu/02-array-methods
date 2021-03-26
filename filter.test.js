const filterFunction = require("./filter.js");

describe('filter function', () => {
    it('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.', () => {
        const myArray = [2, 3, 4, 6, 7]
        const newArray = filterFunction(myArray, (x) => x % 2 !== 0);
        

        expect(newArray).toEqual([3, 7]);
    });
});