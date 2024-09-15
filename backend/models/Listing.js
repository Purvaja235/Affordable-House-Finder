const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        },
    ],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
