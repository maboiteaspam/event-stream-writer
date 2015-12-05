
var flower = require('flower')

module.exports = function eventStreamWriter () {
  return {
    stdin: function(chunk) { stream.write(chunk); },
    stdout: flower()
  }
};
