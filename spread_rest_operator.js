
//With ES6/Babel
//  Now if we call it spread or rest depends on where we use it, 
/*
 the spread operator is used to split up array elements or object properties. 
*/
//Spread eg.

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name : 'Syed'
}

const newPerson = {
  ...person,
  age : 31
}

console.log(newPerson);

// Rest eg.
/*
Now the Rest operator is the same operator but used differently, here it's used to merge a list of function arguments into an array. 
And this shows us where we use it.
*/
const filterArray = (...arg) => {
   console.log(arg.filter(el => el === 1));
}

filterArray (1, 2, 3);
