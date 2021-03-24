const reduceFunction = (myArray, callback, initialValue) => {

    let acc = initialValue;
    
        if (initialValue === undefined) {
            acc = 0;
        } else {
            acc = initialValue;
            
        }
        for(let i = 0; i < myArray.length; i++) {
            acc = callback(acc, myArray[i])
        }
    return acc;
};

module.exports = reduceFunction;