const { Film } = require('../models'); // Pastikan path sesuai dengan struktur proyek Anda

// Data film yang akan ditambahkan
const film = [
  { title: 'The Karate', categoryId: 1 },
  { title: 'Toy Story 4', categoryId: 2 },
  { title: 'Fash & furious 9', categoryId: 1 },
  { title: 'Waktu Maghrib', categoryId: 3 },
  // Tambahkan data film lainnya sesuai kebutuhan
];

// Fungsi untuk menjalankan seeding
async function seed() {
  try {
    await Film.bulkCreate(film);
    console.log('Seeding film berhasil.');
  } catch (error) {
    console.error('Terjadi kesalahan saat seeding film:', error);
  }
}

// Panggil fungsi seed untuk menjalankan seeding
seed();
