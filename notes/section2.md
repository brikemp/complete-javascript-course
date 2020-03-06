## Javascript

- Javascript is object-oriented
- Javascript can be used on the browser or backend/server-side (node.js)


### Data Types
- Number: all numbers are floats
  - 5 / 2 = 2.5
  - 5 % 2 = 1
- String
  - TODO: is best practice to use single or double quotes
  - A string literal is another word for a value, as opposed to a reference
  - String interpolation:
    - must use backticks: `This is my variable: ${variable}`
      - with backticks you do not have to escape quotes
- Boolean
- Undefined: does not have a value yet
- Null: non-existent
  - TODO: what is the differnce between undefined and null

- Variables cannot start with numbers or symbols except for a $ or _
- Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)
  - This is how loose equality (==) is measured
    - https://dorey.github.io/JavaScript-Equality-Table/
  - There are 3 types:
    - to string, boolean, or number
    - primitives and objects can also only be converted in those 3 ways
    - TODO: what are primitives 
- Declaration:
  var year, month, day;
  year = 2020;
  month = 2;
  day = 8;


- Comments: /* ... */ or //

### Objects
- Can declare keys as strings or just variable names
- Can get keys with obj.key or obj["key"]
- Functions can be values
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  calcAge: function(birthYear) {
    return 2020 - birthYear;
  }
}

console.log(john.calcAge(john.birthYear));
OR
console.log(john.calcAge(this.birthYear));

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }
}

### Arrays
- Common Methods:
 - .push(): add elelment to end of array
 - .unshift(): add elemnts to the front of an Array
 - .pop(): remove element from the end of an array
 - .shift(): remove element from front of an array
 - .splice(): remeove/add elements in an array.
  - parameters:
    - start location
    - number of elements to delete
    - (optional) items to insert

### Loops
- for (let i = 0; i < 5; i += 3)
- for (let i = 0; i < name.length; i++)
- for (name in names)
- while
- do ... while
- continue and break
 - continue: skip this iteration
 - break: break out of loop/end loop