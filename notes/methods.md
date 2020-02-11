- JSON.stringify() takes a JavaScript object and then transforms it into a JSON string.
- JSON.parse() takes a JSON string and then transforms it into a JavaScript object.

const myObject = {
  dog: "maltese",
  cat: "siamese",
  count: 3
};

console.log(JSON.stringify(myObject));
// result: {"dog":"maltese","cat":"siamese","count":3}

console.log(JSON.parse(JSON.stringify(myObject)));
// result: Object {dog: "maltese", cat: "siamese", count: 3}