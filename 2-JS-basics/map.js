const string = "first,second, third, fourth, fifth,sixth";

let ids = string.split(",")

let finalIds = ids.map(function (id) {
    if (id[0] === " ") {
        id = id.substring(1);
    }
    return id
  });

console.log (finalIds)

