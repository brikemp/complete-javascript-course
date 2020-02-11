let city1 = 'los angeles';
let city2 = 'seattle';
let state;

if (city1 === 'los angeles') {
  state = 'CA';
  console.log(state);
} else {
  state = 'WA'
}

state = '';
city1 === 'los angeles' ? state = 'CA' : state = 'WA';
console.log(state);



switch (city2) {
  case 'los angeles':
    state = 'CA';
    break
  case 'seattle':
    state = 'WA';
    break
  default:
    state = 'Unknown';
}
console.log(state);



