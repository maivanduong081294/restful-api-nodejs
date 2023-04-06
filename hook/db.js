"use strict";
const db = require("../db");

module.exports = {
    getRows: (options, values) => {
        return new Promise((resolve, reject) => {
            try {
                db.query(options, values, function (err, result) {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(result);
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    theRows: (res, options, values) => {
        db.query(options, values, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    getRow: (options, values) => {
        return new Promise((resolve, reject) => {
            try {
                db.query(options, values, function (err, result) {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(result[0]);
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    theRow: (res, options, values) => {
        db.query(options, values, (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    theExcute: (res, message, options, values) => {
        db.query(options, values, (err, response) => {
            if (err) throw err;
            res.json(message);
        });
    },
};
