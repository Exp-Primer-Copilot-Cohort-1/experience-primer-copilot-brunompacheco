// Create web server and listen on port 3000
// This file is the entry point for the application
// It is the first file that is run when the application is started
// It imports all the other modules and starts the server

// import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const comments = require('./comments');

// create web server
const app = express();

// set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up static file server
app.use(express.static(path.join(__dirname, 'public')));

// set up routes
app.get('/comments', comments.getComments);
app.post('/comments', comments.addComment);

// start the web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});