'use strict';

jest.dontMock('../lib');

describe('NameGenerator', () => {
  it('empty constructor returns a new object with default alphabet', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator();
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  });

  it('passed on alphabet to constructor will be used', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a', 'b']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a', 'b']);
  });

  it('nameForId(0) returns first letter of alphabet', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a', 'b']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a', 'b']);
    expect(namegenerator.nameForId(0)).toEqual('a');
  });

  it('nameForId(1) returns second letter of alphabet', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a', 'b']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a', 'b']);
    expect(namegenerator.nameForId(1)).toEqual('b');
  });

  it('nameForId(1) for one letter alphabet returns same letter twice', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a']);
    expect(namegenerator.nameForId(1)).toEqual('aa');
  });

  it('nameForId() for negative values returns nothing', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a']);
    expect(() => {
      namegenerator.nameForId(-2)
    }).toThrow();
  });

  it('iterator() is generator values in sequence', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a','b','c']);

    expect(namegenerator.next().value).toEqual('a');
    expect(namegenerator.next().value).toEqual('b');
    expect(namegenerator.next().value).toEqual('c');
    expect(namegenerator.next().value).toEqual('aa');
  });

  it('iterator() is working with for of loop', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a','b','c']);

    var i = 0;
    for (let name of namegenerator) {
      let nameForId = namegenerator.nameForId(i++);
      expect(name).toEqual(nameForId);

      if (i > 10) {
        break;
      }
    }
  });

  it('idForName() returns same ids as input for nameForId()', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a']);
    expect(namegenerator).not.toBe(undefined);
    expect(namegenerator.alphabet).toEqual(['a']);

    for (let i; i < 1000; i++) {
      let name = namegenerator.nameForId(i)
      let id = namegenerator.idForName(name)
      expect(id).toEqual(i);
    }
  });

  it('array(0, 3) returns [a,b,c,aa]', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a', 'b', 'c']);
    expect(namegenerator).not.toBe(undefined);

    let result = namegenerator.array(0, 3);
    expect(result).toEqual(['a', 'b', 'c', 'aa']);
  });

  it('range(1, 4) is generating [b, c, aa, ab]', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a','b','c']);
    let range = namegenerator.range(1, 4);

    expect(range.next().value).toEqual('b');
    expect(range.next().value).toEqual('c');
    expect(range.next().value).toEqual('aa');
    expect(range.next().value).toEqual('ab');
    expect(range.next().done).toEqual(true);
  });

  it('range(1, 4) is working with for of loop', () => {
    let NameGenerator = require('../lib');
    let namegenerator = new NameGenerator(['a','b','c']);

    var i = 1;
    for (let name of namegenerator.range(1, 4)) {
      let nameForId = namegenerator.nameForId(i++);
      expect(name).toEqual(nameForId);
    }
  });
});