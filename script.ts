console.log("decoratory");

class Person {
  firstname: String;
  lastname: String;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  say(text) {
    return this.firstname + " " + this.lastname + " says: " + text;
  }
}

const luki = new Person("Luki", "king");

console.log("luki", luki);
