const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    laptop: {
        type: Schema.Types.ObjectId,
        ref: 'Laptop',
        required: true
    },
    quantity: {
        type: Schema.Types.Number,
        required: true
    },
    status: {
        type: Schema.Types.String,
        required: true,
        default: 'Not processed'
    },
    price: {
        type: Schema.Types.Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;