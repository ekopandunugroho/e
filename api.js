const express = require('express');
const router = express.Router();
const { Aktor, Kategori, Film } = require('./models');

router.get('/actors', async (req, res) => {
  try {
    const actors = await Aktor.findAll();
    res.json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Kategori.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

router.get('/films', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

module.exports = router;
