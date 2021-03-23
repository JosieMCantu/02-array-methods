
// const filterFunction = (myArray, callback) => {
//     let cloneArr = [];
//     for (let i = 0; i < myArray.length; i++) {
        
//         if(callback(myArray[i])) 
//         cloneArr = [...cloneArr, myArray[i]];
//     }
//     return cloneArr;

// };

const filterFunction = (myArray, callback) => {
    let cloneArr = [];
    for (let i = 0; i < myArray.length; i++) {
        
        if(callback(myArray[i]) === true) {
        cloneArr[cloneArr.length] = myArray[i];
        }
    }
    return cloneArr;

};

module.exports = filterFunction;