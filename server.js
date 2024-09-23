// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const magangRoutes = require('./routes/magang');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Gunakan rute magang
app.use('/api/magang', magangRoutes);

// Route default untuk memeriksa server
app.get('/', (req, res) => {
    res.send('Server Berjalan dengan Baik!');
});

// Jalankan server di port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});