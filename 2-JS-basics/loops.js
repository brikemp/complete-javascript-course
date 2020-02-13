//  for loop
var i; 
  
for (i = 0; i < 10; i++)  
{ 
    console.log("Hello World!\n"); 
} 

// for two
const cars = ["audi","bmw", "mercedes"];
var text = "";
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
  }
console.log(text);

// JavaScript program to illustrate while loop 
  
var x = 1; 
  
// Exit when x becomes greater than 4 
while (x <= 4) 
{ 
    console.log("Value of x:" + x + "\n"); 

    // increment the value of x for 
    // next iteration 
    x++; 
} 


// For in
var languages = { first : "C", second : "Java",  
third : "Python", fourth : "PHP",  
fifth : "JavaScript" }; 

// iterate through every property of the 
// object languages and print all of them 
// using for..in loops 
for (itr in languages)  
{ 
console.log(languages[itr] + "\n"); 
} 

// -------------------------------------------

var txt = 'JavaScript';
var x;

for (x of txt) {
  console.log(x + "\n");
}

// do while
var x = 21; 
  
do 
{ 
    // The line while be printer even 
    // if the condition is false 
    console.log("Value of x:" + x + "\n"); 

    x++; 
} while (x < 20); 

// jump through iteration
for (i = 0; i < 10; i++) {
    if (i == 5) {
      
  continue
  ;
    }
    console.log(i);
}