/**
 * Custom implementation of Array.prototype.map.
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * 
 * @param {Function} callback - Function that is called for every element of the array. Each time callback executes, the returned value is added to the new array.
 * @returns {Array} A new array with each element being the result of the callback function.
 */
Array.prototype.myMap =function(callback) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};


const nums = [1, 2, 3];

const doubled = nums.myMap(n => n * 2);

console.log(doubled);