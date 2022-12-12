# Objects

In JavaScript, "object" usually refers to a type of key-value structure, similar to a Ruby hash. Here's an example of a JavaScript object:

```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);
```

Two ways of declaring methods:
* The first one is described above, here's another example:
```javascript
const bankAccount = {
  // simple value attributes
  accountNumber: 376782676,
  accountSortCode: 999999,

  // we can attach functions too (so they act like 'methods'):
  getBalance: () => {
    return 100;
  }
};

bankAccount.getBalance();
```