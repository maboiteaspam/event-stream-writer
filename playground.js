
var flower = require('flower');

var streamA = flower();
var streamB = flower();

streamB.on('data', function (d) {
  console.log(d)
});

var eventStreamWriter = require('./index')
var writer = eventStreamWriter();           // eventStreamWriter is a function.
                                            //
                                            // Which produces object {
streamA.on('data', writer.stdin)            //  stdin: event listener handle
writer.stdout.pipe(streamB);                //  stout: stream of events
                                            // }
                                            //
streamA.write('hello the world')            // It helps to pipe events
                                            // of a stream into another one.
                                            //
                                            // Currently when streamA emits data,
                                            // the event argument is piped to streamB.
                                            //

