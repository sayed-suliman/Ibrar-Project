const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    pp_num: {
        type: String,
        required: true,
        // unique: true // Ensures uniqueness
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_mob: {
        type: String,
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    end_date: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
    }

});

const CustomerModel = mongoose.model("Customer", customerSchema);

module.exports = CustomerModel;
