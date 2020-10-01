const path = require('path'); // import path module
const express = require('express');
const exphbs = require('express-handlebars'); // exphbs = express-handlebars
const dotenv = require('dotenv');
dotenv.config(); // use anytime we need

const route = require('./routes');

const app = express();

// Static files configuration
app.use(express.static(path.join(__dirname, 'public')));

/* Get config in .env file */
const PORT = process.env.PORT;
const HOST = process.env.HOSTNAME;

/* Template engine */
app.engine('.hbs', exphbs({
    // handlebars config
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
// The views directory is in ./resource/views so we need to indicate the path to views directory
app.set('views', path.join(__dirname, 'resources/views')); // __dirname: get current directory
// see more: https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/#:~:text=The%20__dirname%20in%20a,It%20works%20similar%20to%20process.

/* Testing */
// console.log('__dirname: ', __dirname); // /home/ltvan/nodejs/CRUD-App/src
// console.log('process.cwd(): ', process.cwd()); // /home/ltvan/nodejs/CRUD-App
// console.log('./: ', path.resolve('./')); // /home/ltvan/nodejs/CRUD-App
// console.log('filename: ', __filename); // /home/ltvan/nodejs/CRUD-App/src/app.js

/* Routing */
route(app);

app.listen(PORT, HOST, () => console.log(`Server is running at http://${HOST}:${PORT}`));
