const CustomerModel = require("../../models/customer");

module.exports = {
    // add customer
    async add(req, res) {
        try {
            const data = req.body;
            console.log(data);
            const customer = await CustomerModel({ data }).save();
            console.log(customer);
            return res.redirect("/");
        } catch (e) {
            console.log('error', e);
            return res.status(401).send('Error', e.message);
        }
    },
    // get all data
    async get(req, res) {
        try {
            res.status(201).send('passed here');
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    },
}