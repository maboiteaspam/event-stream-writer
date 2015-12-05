# Event stream writer

An event handler to write in a stream.

## Install

	npm i maboiteaspam/event-stream-writer --save

## Usage

```js
var flower = require('flower');

var streamA = flower();
var streamB = flower();

var eventStream = require('./index')

var writer = eventStream('data', streamA);  // event-stream-writer is a stream,
                                            // which writes specific event emitted
                                            // by a foreign stream on itself.
                                            //
writer.pipe(streamB);                       // It s a stream to pipe then process events.
                                            //
streamB.on('data', function (d) {           // As a result streamB will emit streamA 'data' events.
  console.log(d)                            // As if they was piped directly.
});
                                            //
streamA.write('hello the world')            // write a data into streamA,
                                            // to trigger its 'data' event,
                                            // which event-stream-writer pipes into streamB,
                                            // which then emits 'data' event itself,
                                            // as a regular stream.
```

#### How i use that ?

With `bubbled`, i m able to bubble up down-streams events to the top-level-stream.

With `event-stream-writer`, i can then re-stream-down specifics event contents,
from the top-level-stream to any another-stream.

## More

You can see it in action in `npi`

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/bubbled
