const reduceFunction = (myArray, callback, initialValue) => {

    let acc = initialValue;
    
        if (initialValue === undefined) {
            acc = myArray[0];
            for(let i = 1; i < myArray.length; i++) {
                acc = callback(acc, myArray[i])}
        } else {
            acc = initialValue;
            for(let i = 0; i < myArray.length; i++) {
                acc = callback(acc, myArray[i])
            }
        }
    return acc;
};


module.exports = reduceFunction;