require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const models = require('./models/users')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json())

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/checkout', (req, res) => {
  var cookie = req.headers.cookie;
  var data = req.body.data;
  // console.log('cookie:', req.headers.cookie)
  // console.log(req.body.data)
  data.cookie = cookie;
  models.checkSession(cookie, data)
  // models.saveInfo(data);

  res.send('ok')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
