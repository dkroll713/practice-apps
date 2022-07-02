const db = require('../db.js');

module.exports.getSession = cookie => {
  console.log('cookie:', cookie);
  return db.queryAsync(
    `SELECT session_id from users where users.session_id=?`, cookie
  )
  // .then(response => {
  //   console.log('response:', response[0])
  //   return response[0];
  // })
  // .catch(error => {
  //   console.log(error);
  // })
}