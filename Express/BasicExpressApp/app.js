const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // Send a JSON object as a reponse 
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ];
      res.send(users);})

// app.get('/', (req, res) => {
    // Send a normal string as a reponse
//     res.send('Alsslamu Alaikum')
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
