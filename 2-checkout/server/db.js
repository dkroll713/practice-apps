const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})


const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => console.log('connected'))
  .then(() =>
    db.queryAsync(
      // 'INSERT INTO `billing` (`cc`,``exp`,`cvv`,`bzip`) VALUES ("1","05/25","117","77024")'
      // 'INSERT INTO `billing` (`cc`,`exp`,`cvv`,`bzip`) VALUES ("12345678","05/23","117","77024")'
      // 'DROP TABLE IF EXISTS `billing`'
      'SELECT * FROM billing'
    )
  )
  .then((data) => console.log(data[0]))
  // .then(() =>
  //   // Expand this table definition as needed:
  //   db.queryAsync(
  //     'INSERT INTO `user` (`name`,`email`,`password`,`addressOne`,`addressTwo`,`city`,`state`,`zip`,`phone`,`id_billing`) VALUES ("David Kroll","dkroll713@gmail.com","bird","10062 Park Trl","","Houston","TX","77024","8322653040",0);'
  //   )
  // )
  .catch((err) => console.log(err));

module.exports = db;
