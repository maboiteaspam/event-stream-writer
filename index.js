
var flower = require('flower')

module.exports = function eventStreamWriter (event, streamEmitter) {
  var stream = flower();

  streamEmitter.on(event, function (chunk) {
    stream.write(chunk);
  })
  return stream;
};
