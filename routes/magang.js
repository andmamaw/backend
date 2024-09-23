// routes/magang.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Menambah data magang
router.post('/', (req, res) => {
    const { nama, nim, fakultas, program_studi, asal_universitas, periode_mulai, periode_selesai, hasil } = req.body;
    const sql = 'INSERT INTO magang (nama, nim, fakultas, program_studi, asal_universitas, periode_mulai, periode_selesai, hasil) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nama, nim, fakultas, program_studi, asal_universitas, periode_mulai, periode_selesai, hasil], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, nama });
    });
});

// Mengambil semua data magang
router.get('/', (req, res) => {
    db.query('SELECT * FROM magang', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Mengupdate data magang
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nama, nim, fakultas, program_studi, asal_universitas, periode_mulai, periode_selesai, hasil } = req.body;
    const sql = 'UPDATE magang SET nama = ?, nim = ?, fakultas = ?, program_studi = ?, asal_universitas = ?, periode_mulai = ?, periode_selesai = ?, hasil = ? WHERE id = ?';
    db.query(sql, [nama, nim, fakultas, program_studi, asal_universitas, periode_mulai, periode_selesai, hasil, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, nama });
    });
});

// Menghapus data magang
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM magang WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Data berhasil dihapus' });
    });
});

module.exports = router;