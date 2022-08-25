const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// const expressHbs = require('express-handlebars');

const app = express();

//registers handlebars as the templating engine
// app.engine('hbs', expressHbs());
// app.set('view engine', 'hbs');

//registers ejs as the templating engine
// app.set('view engine', 'ejs');

//registers pug as the templating engine
app.set('view engine', 'pug');

app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//the way you pass data into template engines is ALWAYS the same
//but handlebars/esj/pug all recieve it differently in the template
app.use(errorController.get404);



app.listen(3000);
