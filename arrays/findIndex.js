
// its uses a callback function as. a paramter to find the index of the element

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