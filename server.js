const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;

const password = encodeURIComponent('!Q2w#E4r');
mongoose.connect(
    `mongodb+srv://edwinjackson:${password}@ejackson-brainstation-8bkjp.mongodb.net/dimitrys_durians?retryWrites=true&w=majority`,
    { useNewUrlParser: true });
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