const { Router } = require('express');
const Store = require('../models/store');
const router = Router();

// gets all stores
router.get('/', async (req, res) => {
    const stores = await Store.find();
    res.json(stores);
})

router.post('/', async (req, res) => {
    const newStore = await Store.create(req.body);
    res.json(newStore);
})

module.exports = router;