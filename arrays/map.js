
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