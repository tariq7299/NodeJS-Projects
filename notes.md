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
