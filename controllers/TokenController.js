"use strict";

const md5 = require("md5");
const db = require("../hook/db");

const table = "token";

module.exports = {
    check: (domain, token) => {
        let sql = `SELECT * FROM ${table} WHERE domain like ? AND token like ? AND enabled = 1`;
        return db.getRow(sql, [domain, token]);
    },
};
