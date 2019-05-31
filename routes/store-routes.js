const { Router } = require('express');
const Store = require('../models/store');
const router = Router();

// gets all stores
router.get('/', async (req, res) => {
    const stores = await Store.find();
    res.json(stores);
})

module.exports = router;