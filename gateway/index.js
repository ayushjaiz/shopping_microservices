const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const PORT = 8000;

const cors = require('cors');
const proxy = require('express-http-proxy');

app.use(cors());
app.use(express.json());

app.use('/customer', proxy(`http://localhost:8001`));
app.use('/', proxy(`http://localhost:8002`));
app.use('/shopping', proxy(`http://localhost:8003`));

app.get('/', (req, res) => {
    res.send('Hello from gateway');
});

app.listen(PORT, () => {
    console.log(`Listening to gateway at port ${PORT}`);
});
