/**
 * 
 * @param {number} array 
 * 
 */
let simpleArray = (array) => {
    let solvedElements = solveElements(array)
    let newSet = new Set(solvedElements);
    return [...newSet]
}

let solveElements = (array) => {
    let newArray = array.map((el) => {
        if (typeof el === "number" || typeof el === "string") {
            if (typeof el === 'number') {
                return el
            } else {
                return el.toLowerCase();
            }
        }
    })
    return newArray;
}



let complexArray = (array, key) => {
    const seen = new Set();
    const newId = key;
    if (typeof array[0][newId] === "undefined") {
        return "The key you sent not exist in the object"
    }
    const filteredArray = array.filter(el => {
        const duplicate = seen.has(el[newId]);
        seen.add(el[newId])

        return !duplicate
    })
    return filteredArray;
}


module.exports = {
    simpleArray,
    complexArray
}