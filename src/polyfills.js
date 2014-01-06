//Objects

if (typeof Object.keys !== 'function') {
  Object.keys = function (obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };
}

if (Object.create !== 'function') {
  Object.create = (function () {
    function F() {};
    return function (o) {
      if (arguments.length !== 1) {
        throw new Error('Object.create implementation only accepts one parameter.');
      }
      F.prototype = o;
      return new F()
    }
  }());
}


//Arrays

if (typeof Array.prototype.forEach !== 'function') {
  Array.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i += 1) {
      callback.call(this, this[i], i);
    }
  };
}

if (typeof Array.prototype.filter !== 'function') {
  Array.prototype.filter = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i += 1) {
      if (callback.call(this, this[i], i)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

if (typeof Array.prototype.map !== 'function') {
  Array.prototype.map = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i += 1) {
      result.push(callback.call(this, this[i], i));
    }
    return result;
  };
}

if (typeof Array.prototype.indexOf !== 'function') {
  Array.prototype.indexOf = function (elem) {
    for (var i = 0; i < this.length; i += 1) {
      if (elem === this[i]) {
        return elem;
      }
    }
    return -1;
  };
}

//Strings

if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function () {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
  };
}