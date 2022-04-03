// // Import the Sequelize constructor from the library
// const Sequelize = require('sequelize');

// require('dotenv').config();

// // Create connection to our database, pass in your MySQL information for username and password
// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql2',
//     port: 3306
//   });
// }

// module.exports = sequelize;

exports.configure = function(env) {
  return configs[env];
}
let configs = {
  "development": {
    "username": "root",
    "password": "3Spacejam0",
    "database": "dating_blog_db",
    "host": "localhost",
    "dialect": "mysql",
    port: 3306
  },
  //,
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "production": {
    "use_env_variable":"JAWSDB_URL",
    "dialect": "mysql"
  }
}