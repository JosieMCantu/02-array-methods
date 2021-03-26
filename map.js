

const mapFunction = (myArray, callback) => {
    const emptyArray = [...myArray];
    for(let i = 0; i < myArray.length; i++ ) {
        emptyArray[i] = callback(emptyArray[i]);
    }
    return emptyArray;
};

module.exports = mapFunction;