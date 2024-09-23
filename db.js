// db.js
const mysql = require('mysql');

// Koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Ganti dengan password MySQL Anda
    database: 'crud_magang'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Terhubung ke database');
});

module.exports = db;