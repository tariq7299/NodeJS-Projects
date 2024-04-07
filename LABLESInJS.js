#! THis code illustrate how to use "labels" in javascript


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