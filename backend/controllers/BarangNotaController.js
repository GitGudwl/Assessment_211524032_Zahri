import Nota from '../models/Nota.js'; // Assuming the Nota model file is named Nota.js
import Barang from '../models/Barang.js'; // Assuming the Barang model file is named Barang.js
import BarangNota from '../models/BarangNota.js';

export const createBarangNota = async (req, res) => {
    try {
      // Get data from the request body
      const { KodeNota, KodeBarang, JumlahBarang } = req.body;
  
      // Check if KodeNota exists
      const existingNota = await Nota.findOne({ where: { KodeNota } });
      if (!existingNota) {
        return res.status(404).json({ error: 'Nota not found' });
      }
  
      // Get HargaSatuan from Barang
      const barang = await Barang.findOne({ where: { KodeBarang } });
  
      if (!barang) {
        return res.status(404).json({ error: 'Barang not found' });
      }
  
      const hargaSatuan = barang.HargaSatuan; // Get the harga satuan
  
      // Get total harga from JumlahBarang and HargaSatuan
      const Jumlah = JumlahBarang * hargaSatuan;
  
      // Create BarangNota
      const barangNota = await BarangNota.create({
        KodeNota,
        KodeBarang,
        JumlahBarang,
        HargaSatuan: hargaSatuan,
        Jumlah: Jumlah,
      });
  
      res.status(201).json({ msg: 'BarangNota Created', data: barangNota });
    } catch (error) {
      console.error(error.message);
  
      if (error.message.includes('Validation error')) {
        res.status(500).json({ error: 'Terjadi Validation Error' });
      } else {
        res.status(500).json({ error: 'Terjadi kesalahan dalam membuat BarangNota.' });
      }
    }
  };
  