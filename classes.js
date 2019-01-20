// with ES6

class Human {
  constructor() {
    this.gender = "M";
  }
  
  myGender () {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor () {
    super();
     this.name = "Syed";
     this.gender = "MM";
  }
  
  myName () {
    console.log(this.name);
  } 
}

const person = new Person();
person.myName();
person.myGender();
