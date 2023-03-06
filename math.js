// Třída pro reprezentaci osoby
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getIntroduction() {
    let pronoun = "";
    if (this.gender === "male") {
      pronoun = "He";
    } else if (this.gender === "female") {
      pronoun = "She";
    } else {
      pronoun = "They";
    }
    return `${pronoun} is ${this.age} years old and their name is ${this.name}`;
  }
}

// Třída pro práci s rodinnými vztahy
class FamilyTree {
  constructor() {
    this.people = [];
    this.relationships = new Map();
  }

  addPerson(person) {
    this.people.push(person);
  }

  addRelationship(person1, person2, relationship) {
    if (!this.people.includes(person1) || !this.people.includes(person2)) {
      throw new Error("Both people must be added to the family tree first");
    }
    this.relationships.set(`${person1}-${person2}`, relationship);
  }

  getRelationship(person1, person2) {
    if (!this.people.includes(person1) || !this.people.includes(person2)) {
      throw new Error("Both people must be added to the family tree first");
    }
    return this.relationships.get(`${person1}-${person2}`);
 
