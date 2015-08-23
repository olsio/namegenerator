# namegenerator

![Build Status](https://img.shields.io/travis/olsio/namegenerator.svg) ![Downloads](https://img.shields.io/npm/dm/namegenerator.svg) ![npm version](https://img.shields.io/npm/v/namegenerator.svg) ![dependencies](https://img.shields.io/david/olsio/namegenerator.svg) ![dev dependencies](https://img.shields.io/david/dev/olsio/namegenerator.svg) ![License](https://img.shields.io/npm/l/namegenerator.svg)

The main purpose of namegenerator generate an ordered list of names based on an alphabet.

For a simple alphabet  like 'a', 'b', 'c' the sequence is:

```a, b, c, aa, ab, ac, ba, bb, bc, ca, cb, cc, aaa, aab, ...```

## Getting Started

Install it via npm:

```shell
npm install namegenerator --save
```

And include in your project:

```javascript
var Namegenerator = require('namegenerator');

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
```

## ES6
```javascript
import Namegenerator from 'namegenerator';

let namegenerator = new Namegenerator(['a', 'b', 'c']);

namegenerator.nameForId(0); // a
namegenerator.nameForId(1); // b
namegenerator.nameForId(2); // c
namegenerator.nameForId(3); // aa

let ids = [0, 1, 2, 3, 4];

for (let id of ids) {
  let name = namegenerator.nameForId(id);
  console.log(name);
}

// Output:
// a
// b
// c
// aa
// ab

for (let name of namegenerator) {
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

for (let name of namegenerator.range(1000, 1005)) {
  console.log(name);
}

// Output:
// cbcbcb
// cbcbcc
// cbccaa
// cbccab
// cbccac
```

## FAQ

**What is the default alphabet.**

The default alphabet is based on the allowed characters for a Twitter account.
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'

## License

BSD-2-Clause