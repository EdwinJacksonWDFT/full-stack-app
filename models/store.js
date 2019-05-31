const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: String,
    location: String,
    manager: String,
    openDate: Date
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
