// with ES6 with babel

class Human {

  gender = "M";
  
  myGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  
     name = "Syed";
     gender = "MM";
  
  
  myName = () => {
    console.log(this.name);
  } 
}

const person = new Person();
person.myName();
person.myGender();
