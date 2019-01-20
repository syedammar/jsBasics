/*
Destructuring allows you to easily extract array elements or object properties and store them in variables.
Destructuring allows you to pull out single elements or properties and store them in variables for arrays
*/

//Array destructuring

const numArray = [1, 2, 3];
[num1, num2] = numArray;
[a1, , a3] = numArray;
console.log(num1, num2);
console.log(a1,a3);

//Object destructuring

const numObject = {
  name: 'Syed',
  age: 'Ammar'
}
{name1} = numObject;
console.log(name1); // syed 
console.log(age); // age

