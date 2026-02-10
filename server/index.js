const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Document Signature API is Running! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});