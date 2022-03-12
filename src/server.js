const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();


//setting
app.set('port', process.env.PORT ||4000);

app.set('views',path.join(__dirname, 'views'));

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), '/layouts'),
    partialsDir: path.join(app.get('views'), '/partials'),
    extname: '.hbs'

}));

app.set('view engine', 'hbs');

//var globals

//middleware

//routes
app.use(require('./routes/index.routes')) //usamos archivo exportado de index.routes.js



//public
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;