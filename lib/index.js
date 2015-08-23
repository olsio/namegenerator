'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _precond = require('precond');

var _precond2 = _interopRequireDefault(_precond);

var defaultAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var NameGenerator = (function () {
  function NameGenerator() {
    var alphabet = arguments.length <= 0 || arguments[0] === undefined ? defaultAlphabet : arguments[0];

    _classCallCheck(this, NameGenerator);

    this.alphabet = alphabet;
    this.index = 0;
  }

  _createClass(NameGenerator, [{
    key: 'nameForId',
    value: function nameForId(id) {
      _precond2['default'].checkArgument(id >= 0);

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
        name = this.alphabet[id % this.alphabet.length] + name;
        id = Math.floor(id / this.alphabet.length);
      }

      return name;
    }
  }, {
    key: 'idForName',
    value: function idForName(handle) {
      var currentId = this.calcuateIdCandicate(handle);
      while (true) {
        var handleCandidate = this.nameForId(currentId);
        if (handleCandidate == handle) {
          return currentId;
        }
        currentId++;
      }
    }
  }, {
    key: 'calcuateIdCandicate',
    value: function calcuateIdCandicate(handle) {
      var handleLength = handle.length;
      var minimumId = 0;
      for (var i = 0; i < handleLength; i++) {
        minimumId = minimumId + Math.pow(this.alphabet.length, i);
      }
      return minimumId - 1;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this;
    }
  }, {
    key: 'next',
    value: function next() {
      return {
        value: this.nameForId(this.index++),
        done: false
      };
    }
  }, {
    key: 'array',
    value: function array(begin, end) {
      var result = [];
      for (var i = begin; i <= end; i++) {
        result.push(this.nameForId(i));
      }
      return result;
    }
  }, {
    key: 'range',
    value: function range(begin, end) {
      var _ref;

      _precond2['default'].checkArgument(begin >= 0);

      var i = begin;
      var namegenerator = this;

      return (_ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
        return this;
      }), _defineProperty(_ref, 'next', function next() {
        if (i > end) {
          return { done: true };
        }

        return {
          value: namegenerator.nameForId(i++),
          done: false
        };
      }), _ref);
    }
  }]);

  return NameGenerator;
})();

exports['default'] = NameGenerator;
module.exports = exports['default'];