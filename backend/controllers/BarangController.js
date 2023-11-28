import Barang from '../models/Barang.js';

// Create a new Barang
export const createBarang = async (req, res) => {
    try {
        const barang = await Barang.create(req.body);
        res.status(201).json({ msg: "Barang Created", data: barang });
    } catch (error) {
        console.error(error.message);
        if (error.message.includes("Validation error")) {
            res.status(500).json({ error: 'Kode Barang sudah ada.' });
        }
        else {
            res.status(500).json({ error: 'Terjadi kesalahan dalam membuat Barang.' });
        }
    }
}

// Get all Barang
export const getAllBarang = async (req, res) => {
    try {
        const barangList = await Barang.findAll();
        console.log(barangList);
        res.status(200).json(barangList);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
}

// Get a specific Barang by KodeBarang
export const getBarangById = async (req, res) => {
    const { KodeBarang } = req.params;
    try {
        const barang = await Barang.findOne({ where: { KodeBarang } });
        if (barang) {
            res.status(200).json(barang);
        } else {
            res.status(404).json({ msg: "Barang not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
}

// Update a specific Barang by KodeBarang
export const updateBarang = async (req, res) => {
    const { KodeBarang } = req.params;
    try {
        const [updated] = await Barang.update(req.body, { where: { KodeBarang } });
        if (updated) {
            res.status(201).json({ msg: "Barang updated" });
        } else {
            res.status(404).json({ msg: "Barang not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Barang" });
    }
}

// Delete a specific Barang by KodeBarang
export const deleteBarang = async (req, res) => {
    const { KodeBarang } = req.params;
    try {
        const deleted = await Barang.destroy({ where: { KodeBarang } });
        if (deleted) {
            res.status(200).json({ msg: "Barang berhasil dihapus" });
        } else {
            res.status(404).json({ msg: "Barang tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Barang" });
    }
}
