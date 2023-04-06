module.exports = function (app) {
    const routes = ["product"];
    routes.map((item) => {
        let route = require(`./${item}.js`);
        route(app);
    });

    app.get("/home", function (req, res) {
        res.sendfile(global.appRoot + "/product-detail.html");
    });
};
