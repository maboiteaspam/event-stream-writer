# Event stream writer

An event handler to write in a stream.

## Install

	npm i maboiteaspam/event-stream-writer --save

## Usage

```js
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
```

#### How i use that ?

With `bubbled`, i m able to bubble up down-streams events to the top-level-stream.

With `event-stream-writer`, i can then re-stream-down specifics event contents,
from the top-level-stream to any another-stream.

## More

You can see it in action in `npi`

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/bubbled
