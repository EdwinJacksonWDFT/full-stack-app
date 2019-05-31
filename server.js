const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'app loaded' });
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})