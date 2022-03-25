const express = require('express');
<<<<<<< HEAD
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'bigbluedog',
//   cookie: {
//         // Session will automatically expire in 10 minutes
//         // expires: 10 * 60 * 1000
//   },
//   resave: false,
//   rolling: true,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   }),
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
=======
const app = express();

const path = require('path');

const sequelize = require('./config/connection');

// set up handlebars.js
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// session cookies
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// insert middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// session middleware
app.use(session(sess));

// routes
app.use(require('./controllers/index'));

const PORT = process.env.PORT || 3001;

// form connection to sequelize database BEFORE starting server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });
});
>>>>>>> c3de9b135cd8c1521b7095741c20b15137da8695
