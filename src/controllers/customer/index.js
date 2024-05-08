const CustomerModel = require("../../models/customer");
const queryString = require('querystring');

module.exports = {
    // add customer
    async postAdd(req, res) {
        try {
            const data = req.body;
            console.log(data);
            const customer = await CustomerModel(data).save();
            console.log(customer);
            if (customer) {
                const success = "Data Added";
                return res.redirect(`/customer/add?success=${encodeURIComponent(success)}`);
            } else {
                throw new Error('Error occured while adding customer');
            }
        } catch (e) {
            console.log('error', e);
            const error = e.message;
            return res.redirect(`/customer/add?error=${encodeURIComponent(error)}`);
        }
    },
    // get all data
    async getAdd(req, res) {
        try {
            const { error, success } = req.query;
            console.log(decodeURIComponent(success))
            return res.render("customer/add", { error, success });
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    },
    // remove customer
    async removeCustomer(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const customer = await CustomerModel.findByIdAndDelete(id);
            console.log(customer);
            req.flash("success", "The user has been deleted");
            return res.redirect("/");
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    }
}