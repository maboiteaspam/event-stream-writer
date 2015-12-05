
var flower = require('flower')

module.exports = function eventStreamWriter () {
  var stream = flower();
  return {
    stdin: function(chunk) { stream.write(chunk); },
    stdout: stream
  }
};
