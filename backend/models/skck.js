const mongoose = require('mongoose');

const skckSchema = new mongoose.Schema({
    nomor_skck: { type: String, required: true, unique: true },
    nama_lengkap: { type: String, required: true },
    jenis_kelamin: { type: String, required: true },
    kebangsaan: { type: String, required: true, default: "INDONESIA" },
    agama: { type: String, required: true },
    tempat_lahir: { type: String, required: true },
    tanggal_lahir: { type: Date, required: true },
    alamat: { type: String, required: true },
    pekerjaan: { type: String, required: true, default: "BELUM BEKERJA" },
    nik: { type: String, required: true },
    paspor: { type: String, default: "TIDAK ADA" },
    rumus_sidik_jari: { type: String, default: null },
    tanggal_pembuatan: { type: Date, default: Date.now },
    tanggal_kadaluarsa: { type: Date, default: () => new Date(new Date().setMonth(new Date().getMonth() + 6)) },
    keperluan: { type: String, required: true }
});

module.exports = mongoose.model('SKCK', skckSchema);
