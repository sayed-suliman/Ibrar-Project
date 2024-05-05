const CustomerModel = require("../models/customer");

module.exports = {
    async dashboard(req, res) {
        try {
            const customers = await CustomerModel.find();
            return res.render("index", {
                customers
            });
        } catch (e) {
            return res.redirect('/');
        }
    },
};
