const { Kategori } = require('../models'); // Pastikan path sesuai dengan struktur proyek Anda

// Data kategori yang akan ditambahkan
const kategori = [
  { name: 'Action' },
  { name: 'Comedy' },
  { name: 'Horror' },
  { name: 'Animation' },
  // Tambahkan kategori lainnya sesuai kebutuhan
];

// Fungsi untuk menjalankan seeding
async function seed() {
  try {
    await Kategori.bulkCreate(kategori);
    console.log('Seeding kategori berhasil.');
  } catch (error) {
    console.error('Terjadi kesalahan saat seeding kategori:', error);
  }
}

// Panggil fungsi seed untuk menjalankan seeding
seed();

