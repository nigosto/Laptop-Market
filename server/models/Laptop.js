const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptopSchema = new Schema ({
    brand: {
        type: Schema.Types.String,
        required: true
    },
    model: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    description: {
        type: Schema.Types.String,
        required: true
    },
    processor: {
        type: Schema.Types.String,
        required: true
    },
    videoCard: {
        type: Schema.Types.String,
        required: true
    },
    RAM: {
        type: Schema.Types.Number,
        required: true
    },
    memory: {
        type: Schema.Types.Number,
        required: true
    },
    screen: {
        type: Schema.Types.Number,
        required: true
    },
    isAvailable: {
        type: Schema.Types.Boolean,
        default: true,
        required: true
    },
    price: {
        type: Schema.Types.Number,
        required: true
    },
    image: {
        type: Schema.Types.String,
        required: true
    },
    quantity: {
        type: Schema.Types.Number,
        required: true
    }
})

const Laptop = mongoose.model('Laptop', laptopSchema)

module.exports = Laptop;