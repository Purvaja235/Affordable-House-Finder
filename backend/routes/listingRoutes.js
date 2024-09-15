const express = require('express');
const {
    createListing,
    getListings,
    getListingById,
    filterListings,
} = require('../controllers/listingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createListing);
router.get('/', getListings);
router.get('/:id', getListingById);
router.post('/filter', filterListings);

module.exports = router;
