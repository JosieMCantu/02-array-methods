const filterIndexFunction = (myArray, callback) => {
    
    for(let i = 0; i < myArray.length; i++) {
        if (callback(myArray[i]) === true) return i;
    };
    return -1
};

module.exports = filterIndexFunction;