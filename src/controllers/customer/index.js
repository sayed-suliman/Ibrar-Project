const CustomerModel = require("../../models/customer");

module.exports = {
    // add customer
    async postAdd(req, res) {
        try {
            const data = req.body;
            console.log(data);
            const customer = await CustomerModel(data).save();
            console.log(customer);
            return res.redirect("/");
        } catch (e) {
            console.log('error', e);
            return res.status(401).send('Error', e.message);
        }
    },
    // get all data
    async getAdd(req, res) {
        try {
            return res.render("customer/add");
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    },
}