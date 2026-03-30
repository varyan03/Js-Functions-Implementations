// destructring in js is a method of unpacking the values of an array or properties of
// an object into variables
// ✔ Cleaner
// ✔ Faster to write
// ✔ Reduces bugs
// ✔ Essential in React (props/state)
// ✔ Perfect for APIs
// ✔ Makes functions expressive

const arr = [1, 2, 3];

// you can strore the values of the array like this 
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);


// Or you can you destructuring 
const [a, b, c] = arr;
console.log(a, b, c);

// destructuring provides you a way to write a cleaner and shorter code

// destructuring with objects
const std = {
    name: "Ary",
    age : 19
};

// const name = std.name;
// const age = std.age;



// using destructuring 

 const {name : stdName, age} = std;
console.log(stdName, age);


const response = {
  status: 200,
  body: {
    user: { id: 7, profile: { name: "Lin", city: "NY" } },
    tokens: [ "a", "b" ]
  }
};


const {
    status,
    body: {
        user : {
            profile: {name, city}
        },
        tokens :[ ,refresh]
    }
} = response;

console.log(status, name, refresh, city);