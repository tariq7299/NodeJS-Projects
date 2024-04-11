# Hashbang comments

It is written in the first line of a script, to indicate which interpreter to choose to run the code in the script file: 
```javascript
#!/usr/bin/env node

console.log("Hello world");
```
It is only allowed at the first line of a file.  
It will be interpreted as a noraml comment, when you don't execute the file in shell environments.

# UniCode (Code Point)

It starts with a `U+` then followed by unique hexadicimal number.
```
U+0020	Space	<SP>	Normal space
```  

# Labels in javascript

``` javascript
// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
    // The second for statement is labeled "loop2"
    loop2: for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        continue loop1; // Skip both "i = 1, j = 1" and "i = 1, j = 2"
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
```  

# Always use ; to terminate end of lines and statements !

Because if you left ASI (Automatic semicolon insertion) do this you will maybe encounter many errors !!  

# Some nice notes about async

1.  **Asynchronous Operation**: The file writing operation is inherently asynchronous, meaning it does not block the main execution thread (the call stack).  
2.  **Event Loop**: The event loop is responsible for managing the asynchronous operations, checking for their completion, and resuming the execution of the corresponding code.  
3.  **Promises**: Promises provide a more convenient and readable way to handle asynchronous operations, allowing you to use await to pause the execution of the function until the Promise is resolved or rejected.  

# params vs queries  in URL  

The main differences between URL parameters and URL queries are:

1.  **Placement**: URL parameters are part of the URL path, while query strings are appended to the end of the URL.
2.  **Purpose**: URL parameters are used to identify specific resources or values, while query strings are used to pass additional information or parameters to the server.
3.  **Usage**: URL parameters are often used for dynamic routing, while query strings are used for filtering, sorting, or modifying the behavior of the application.
# There is two types of Obj in javascript  

## Data property  

```javascript
const obj = {
  name: 'John Doe'
};

// Data property attributes
Object.getOwnPropertyDescriptor(obj, 'name');
// Output: { value: 'John Doe', writable: true, enumerable: true, configurable: true }
```

## Accessor property  
```javascript
const obj = {
  _name: 'John Doe',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};

// Accessor property attributes
Object.getOwnPropertyDescriptor(obj, 'name');
// Output: { get: [Function: name], set: [Function: name], enumerable: true, configurable: true }
``` 
# Class declaration

```javascript
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

# `.on()` method in NodeJS
.on() Method:  
The .on() method is used to attach an event listener function to a specific event on an event emitter object.  
The syntax is: emitter.on(eventName, listener), where eventName is the name of the event you want to listen for, and listener is the function that will be called when the event is emitted.