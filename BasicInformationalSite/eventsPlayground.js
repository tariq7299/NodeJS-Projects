const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  someMethod() {
    this.emit('myEvent', { data: 'Hello, world!' });
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', (eventData) => {
  console.log('Received event:', eventData);
});

myEmitter.on('error', (err) => {
  console.error('Error occurred:', err);
});

myEmitter.someMethod(); // Output: Received event: { data: 'Hello, world!' }

myEmitter.emit('error', new Error('Something went wrong'));
// Output: Error occurred: Error: Something went wrong


/* 
In this example, we create a custom event emitter class MyEmitter that inherits from the base EventEmitter class. We then create an instance of MyEmitter and add event listeners for the 'myEvent' and 'error' events using the .on() method.

When the someMethod() is called, it emits the 'myEvent' event, which triggers the event listener function that logs the event data. If an error event is emitted, the 'error' event listener is called, which logs the error.
*/