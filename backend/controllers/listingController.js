const asyncHandler = require('express-async-handler');
const Listing = require('../models/Listing');

const createListing = asyncHandler(async (req, res) => {
    const { title, description, price, location, images } = req.body;

    const listing = new Listing({
        title,
        description,
        price,
        location,
        images,
    });

    const createdListing = await listing.save();
    res.status(201).json(createdListing);
});

const getListings = asyncHandler(async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
});

const getListingById = asyncHandler(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    if (listing) {
        res.json(listing);
    } else {
        res.status(404);
        throw new Error('Listing not found');
    }
});

const filterListings = asyncHandler(async (req, res) => {
    const { price, location, type, amenities } = req.body;

    let query = {};

    if (price) {
        query.price = { $lte: price };
    }

    if (location) {
        query.location = location;
    }

    const listings = await Listing.find(query);
    res.json(listings);
});

module.exports = {
    createListing,
    getListings,
    getListingById,
    filterListings,
};
