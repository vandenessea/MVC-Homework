const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequalize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


//Set up HAndlebars.js engine with custom helpers
const hbs = exphbs.create({helpers});

const sess



//Infrom Express.js on which template engine to use
app.engine('handlebars', hbs.engine);





