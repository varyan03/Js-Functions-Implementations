Array.prototype.myPush = function(d) {
    this[this.length] = d;
    return this.length;
};

const arr =[1, 2, 3];

arr.push(10);

console.log(arr.push(20));
console.log(arr);