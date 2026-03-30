/**
 * Custom implementation of Array.prototype.push.
 * Adds the specified element to the end of an array and returns the new length of the array.
 * Note: This simplified version currently appends a single element, while standard push can take multiple elements.
 * 
 * @param {*} d - The element to add to the end of the array.
 * @returns {number} The new length property of the object upon which the method was called.
 */
Array.prototype.myPush = function(d) {
    this[this.length] = d;
    return this.length;
};

const arr =[1, 2, 3];

arr.push(10);

console.log(arr.push(20));
console.log(arr);