/**
 * Custom implementation of Array.prototype.findIndex.
 * Returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {Function} callback - Function to execute on each value in the array. 
 *                              Takes current element, index, and the array itself.
 * @returns {number} The index of the first element in the array that passes the test. Otherwise, -1.
 */
Array.prototype.myFindIndex = function(callback) {
    let index = -1;
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            index = i;
            break;
        }
    }
    return index;
}

let arr = [1, 2 , 3];

console.log(arr.myFindIndex(e => e === 2));