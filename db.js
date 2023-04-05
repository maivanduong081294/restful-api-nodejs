'use strict';
const mysql = require('mysql');
const db = mysql.createConnection({
  socketPath : '/tmp/mysql.sock',
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "nodejs_api",
  insecureAuth : true
});

module.exports = db