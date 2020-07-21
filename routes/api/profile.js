const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Test Route
// @acess   Public
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;
