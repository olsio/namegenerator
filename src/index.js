'use strict';

import Precondtions from 'precond';
const defaultAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default class NameGenerator {

  constructor(alphabet = defaultAlphabet) {
    this.alphabet = alphabet;
    this.index = 0;
  }

  nameForId(id) {
    Precondtions.checkArgument(id >= 0)

    var nameLength = 1;
    var n = this.alphabet.length;

    while (true) {
      if (id < n) {
        break;
      } else {
        id = id - n;
        n = n * this.alphabet.length;
        nameLength = nameLength + 1;
      }
    }

    var name = '';
    for (var i = 0; i < nameLength; i++) {
      name = this.alphabet[(id % this.alphabet.length)] + name;
      id = Math.floor(id / this.alphabet.length);
    }

    return name;
  }

  idForName(handle) {
    var currentId = this.calcuateIdCandicate(handle);
    while (true) {
      var handleCandidate = this.nameForId(currentId);
      if (handleCandidate == handle) {
        return currentId;
      }
      currentId++;
    }
  }

  calcuateIdCandicate(handle) {
    var handleLength = handle.length;
    var minimumId = 0;
    for (var i = 0; i < handleLength; i++) {
      minimumId = minimumId + Math.pow(this.alphabet.length, i);
    }
    return minimumId - 1;
  }


  [Symbol.iterator]() {
    return this;
  }

  next() {
    return {
      value: this.nameForId(this.index++),
      done: false
    }
  }

  array(begin, end) {
    let result = [];
    for (let i = begin; i <= end; i++) {
      result.push(this.nameForId(i));
    }
    return result;
  }

  range(begin, end) {
    Precondtions.checkArgument(begin >= 0);

    var i = begin;
    let namegenerator = this;

    return {
      [Symbol.iterator]() {
        return this;
      },

      next() {
        if (i > end) {
          return { done: true }
        }

        return {
          value: namegenerator.nameForId(i++),
          done: false
        }
      }
    }
  }
}