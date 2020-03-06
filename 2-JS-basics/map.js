const string = "first,second, third, fourth, fifth,sixth";

let ids = string.split(",")

let finalIds = ids.map(function (id) {
    if (id[0] === " ") {
        id = id.substring(1);
    }
    // console.log(this);
    return id
  });

console.log (finalIds)
// console.log(this);

var obj = {
  name: "Bri",
  age: function() {
    console.log("inside of the age function");
    console.log(this);
    console.log(2020-1994-1);
  }
}

obj.age();
console.log(obj);