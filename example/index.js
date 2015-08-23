var Namegenerator = require('../lib');

var namegenerator = new Namegenerator(['a', 'b', 'c']);

namegenerator.nameForId(0); // a
namegenerator.nameForId(1); // b
namegenerator.nameForId(2); // c
namegenerator.nameForId(3); // aa

var ids = [0, 1, 2, 3, 4];

for (var id of ids) {
  var name = namegenerator.nameForId(id);
  console.log(name);
}

// Output:
// a
// b
// c
// aa
// ab

for (var name of namegenerator) {
  console.log(name);
  if (name === 'bc') {
    break;
  }
}

// Output:
// a
// b
// c
// aa
// ab
// ac
// ba
// bb
// bc

var names = namegenerator.array(0, 5);
console.log(names);

// Output:
// [ 'a', 'b', 'c', 'aa', 'ab', 'ac' ]

for (var name of namegenerator.range(1000, 1005)) {
  console.log(name);
}

// Output:
// cbcbcb
// cbcbcc
// cbccaa
// cbccab
// cbccac