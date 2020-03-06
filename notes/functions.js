// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
// }
function sum(a, b) {
    console.log(a + b);
}

// anonymous function
let multiply = function(a,b) {
    console.log(a * b);
}

// IIFE Immediately Invokable Function Expression
// used when functions are used only once
// invoked as soon as the function is declared
let result = (function () {
    console.log(100/5);
})(); 

// Different Formatting
(function() {
    console.log(100/20);
})();

// Different Formatting
!function() {
    console.log(100/25);
}();


sum(5, 2);
multiply(5, 2);

// Arrow Functions
// lexically binds its this value
power = (a, b) => {
    console.log(a**b);
}

// Different Formatting
powerTwo = (a, b) => console.log(a**b);

power(5,5);
powerTwo(5,5);