const everyFunction = (myArray, callback) => {
    
    for (let i = 0; i < myArray.length; i++) {
        
        if(!callback(myArray[i])) {
            return false;
        }
    }
    return true;
}


module.exports = everyFunction;