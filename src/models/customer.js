const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    pp_num: {
        type: String,
        required: true,
        unique: true // Ensures uniqueness
    },
    customer_name: {
        type: String,
        require: true
    },
    customer_mob: {
        type: String,
        require: true
    },
    supplier: {
        type: String,
        require: true
    },
    start_date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    end_date: {
        type: Date,
        require: true,
    },
    notes: {
        type: String,
        require: true
    }

});

const CustomerModel = mongoose.model("Customer", customerSchema);

module.exports = CustomerModel;
