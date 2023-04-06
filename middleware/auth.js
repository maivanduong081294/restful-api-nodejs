const tokenCtrl = require("../controllers/TokenController");

const auth = async (req, res, next) => {
    let token = req.header("Authorization");
    const domain = req.header("origin");
    if (domain !== undefined) {
        if (token === undefined) {
            res.status(401).send({
                error: "Not authorized to access this resource",
            });
        } else {
            token = token.replace("Bearer ", "");
            try {
                const check = await tokenCtrl.check(domain, token);
                if (!check) {
                    throw new Error();
                }
                next();
            } catch (error) {
                res.status(401).send({
                    error: "Not authorized to access this resource",
                });
            }
        }
    } else {
        next();
    }
};
module.exports = auth;
