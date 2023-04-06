"use strict";
module.exports = function (app) {
    let productsCtrl = require("../controllers/ProductsController");

    // todoList Routes
    app.get("/products", productsCtrl.get);

    app.route("/products/:productId")
        .get(productsCtrl.detail)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);
};
