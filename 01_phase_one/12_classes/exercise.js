// We would like to implement a class to represent a user account.
// Here is how we should be able to use this class:

// > const user = new User('Uma');

// > user.getName();
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;
