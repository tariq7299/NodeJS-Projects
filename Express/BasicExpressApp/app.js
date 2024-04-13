const express = require('express')
const app = express()
const port = 3000

    
app.get('/', (req, res) => {
    // Send a normal string as a reponse
    res.send('Alsslamu Alaikum')

    //  // Send a JSON object as a reponse 
    //  const users = [
    //      { id: 1, name: "John Doe" },
    //      { id: 2, name: "Jane Smith" },
    //    ];
    //    res.send(users);})
})


/*
    // If you used router.get() you have to to then export it then use it inside app.use(), like this :

    // wiki.js - Wiki route module
    const express = require("express");
    const router = express.Router();

    // Home page route
    router.get("/", function (req, res) {
    res.send("Wiki home page");
    });

    // About page route
    router.get("/about", function (req, res) {
    res.send("About this wiki");
    });

    module.exports = router;    


    // Then you use it in another file for example like that:

    // app.js
    const wiki = require("./wiki.js");
    // …
    app.use("/wiki", wiki);
*/


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
