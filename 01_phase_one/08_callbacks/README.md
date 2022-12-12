# Callbacks

* Callback is providing a function to another function as an argument.
* Callbacks allows us to deal with long tasks without blocking the program.     

Example:
* You may call addUser('Bob'; followed by getUsers();
* But if addUsers takes longer than getUsers than getUsers will execute and the 
most recently added user wont be there.
* We can use a callback to fix this.

```javascript
const addUser = (user, callback) => {
  users.push(user);
  callback();
}

const getUsers = () => {
  console.log(users);
}

addUser('Will', getUsers);

// passing in the getUsers function as an arg guarantees that function will only run AFTER the user has been added
```

