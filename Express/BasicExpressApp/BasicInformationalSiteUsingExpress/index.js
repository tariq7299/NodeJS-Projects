const express = require('express');
const app = express();
// Importing routes
const aboutPageRoute = require('./routes/aboutPageRoute');
// const error404Route = require('./routes/404PageRoute')
const contactMeRoute = require('./routes/contact-mePageRoute');


app.set("view engine", "ejs");

// The home page route
app.get('/', (req, res) => {
    console.log("Rendering index.html in home route")
    res.render('index')
});
// My routes
app.use(aboutPageRoute);
app.use(contactMeRoute);


// A middleware function to handle undefined routes 
const handleUndefinedRoutes = (req, res, next) => {
    res.status(404).render('404'); // Render the custom 404 page
};
app.use(handleUndefinedRoutes);


app.listen(8080, (req, res) => {
    console.log("APP IS LISTINEING ON PORT 8080")
});

