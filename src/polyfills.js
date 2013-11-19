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