const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const { Aktor, Kategori, Film } = require('./models'); // Pastikan path sesuai dengan struktur proyek Anda

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Konfigurasi koneksi database
const sequelize = new Sequelize('film', 'postgres', 'ekopandu', {
  host: 'localhost',
  dialect: 'postgres',
});

// Set template engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing untuk menampilkan data aktor, kategori, dan film
app.get('/actors', async (req, res) => {
  try {
    const actors = await Aktor.findAll();
    res.render('actors', { actors });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan.');
  }
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await Kategori.findAll();
    res.render('categories', { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan.');
  }
});

app.get('/films', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.render('films', { films });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan.');
  }
});

// Routing lainnya sesuai kebutuhan Anda

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});


// Routing untuk menampilkan data aktor
app.get('/actors', async (req, res) => {
    try {
      const actors = await Aktor.findAll();
      res.render('actors', { actors });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan.');
    }
  });
  
  // Routing untuk menampilkan data kategori
  app.get('/categories', async (req, res) => {
    try {
      const categories = await Kategori.findAll();
      res.render('categories', { categories });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan.');
    }
  });
  
  // Routing untuk menampilkan data film
  app.get('/films', async (req, res) => {
    try {
      const films = await Film.findAll();
      res.render('films', { films });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan.');
    }
  });
  

  const apiRouter = require('./api');

  app.use('/api', apiRouter);
  