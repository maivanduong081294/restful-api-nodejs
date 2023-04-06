"use strict";

const table = "products";
const db = require("../hook/db");

module.exports = {
    get: (req, res) => {
        let sql = `SELECT * FROM ${table}`;
        db.theRows(res, sql);
    },
    detail: (req, res) => {
        let sql = `SELECT * FROM ${table} WHERE id = ?`;
        db.theRow(res, sql, [req.params.productId]);
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = `UPDATE ${table} SET ? WHERE id = ?`;
        db.theExcute(res, "Update success!", sql, [data, productId]);
    },
    store: (req, res) => {
        let data = req.body;
        data.id = null;
        let sql = `INSERT INTO ${table} SET ?`;
        db.theExcute(res, "Insert success!", sql, [data]);
    },
    delete: (req, res) => {
        let sql = `DELETE FROM ${table} WHERE id = ?`;
        db.theExcute(res, "Delete success!", sql, [req.params.productId]);
    },
};
