const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countAvailable: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images : {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const product = mongoose.model('product', productSchema);

module.exports = product;