const db = require('../db.js');
const controllers = require('../controllers/users')

checkSession = (session_id, data) => {
  controllers.getSession(session_id)
  .then(response => {
    if (response[0].length === 0) {
      console.log('no session found; adding current session to db')
      saveInfo(data);
    } else {
      console.log('session already exists in db')
    }
  })
}

saveInfo = (data) => {
  // curate the data object
  data.address = data.address1
  if (data.address2.length > 0) {
    data.address += ' ' + data.address2;
  }
  delete data.address1
  delete data.address2
  console.log('controller data:', data);
  db.queryAsync(
    'INSERT INTO users (`session_id`,`name`, `email`,`password`,`address`,`city`,`state`,`zip`,`phone`,`cc`,`exp`,`cvv`,`bzip`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [data.cookie, data.name, data.email, data.password, data.address, data.city, data.state, data.zip, data.phone, data.cc, data.exp, data.cvv, data.bzip]
  )
  .then((response) => {
    console.log('inserted:', response)
  })
  .catch((error => {
    console.log(error);
  }))
}

module.exports.checkSession = checkSession
module.exports.saveInfo = saveInfo