require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnection = require('./utils/db');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: 'http://localhost:3000' }));

// const password = encodeURIComponent('!Q2w#E4r');
// mongoose.connect(
//     `mongodb+srv://edwinjackson:${password}@ejackson-brainstation-8bkjp.mongodb.net/dimitrys_durians?retryWrites=true&w=majority`,
//     { useNewUrlParser: true });
mongoose.connect(dbConnection({
    protocol: process.env.DB_PROTOCOL || 'mongodb',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || 'localhost:27017',
    database: process.env.DB_NAME,
    options: process.env.DB_OPTIONS,
}), {
    useNewUrlParser: true
})
mongoose.connection.once('open', () => {
    console.log('successfully connected to the database');
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'app loaded' });
})

app.use('/stores', require('./routes/store-routes'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})