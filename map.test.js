const mapFunction = require("./map.js");



describe('map function', () => {
    it('create a new array with the return value of each callback', () => {
        const myArray = [1, 2, 3, 4];
        const newArr = mapFunction(myArray, (x) => x * 2 );
        

        expect(newArr).toEqual([2, 4, 6, 8]);
    });
});