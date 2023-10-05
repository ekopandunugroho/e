const { Aktor } = require('../models'); // Pastikan path sesuai dengan struktur proyek Anda

// Data aktor yang akan ditambahkan
const aktor = [
  { name: 'Robert Downey Jr.', age: 30 },
  { name: 'Tom Holland', age: 25 },
  { name: 'Chris Evans', age: 35 },
  { name: 'Jackie Chan', age: 60 },
  { name: 'jet Lee', age: 50 },
];

// Fungsi untuk menjalankan seeding
async function seed() {
  try {
    await Aktor.bulkCreate(aktor);
    console.log('Seeding aktor berhasil.');
  } catch (error) {
    console.error('Terjadi kesalahan saat seeding aktor:', error);
  }
}

// Panggil fungsi seed untuk menjalankan seeding
seed();
