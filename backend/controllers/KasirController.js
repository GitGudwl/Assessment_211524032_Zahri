import Kasir from '../models/Kasir.js';

// Create a new Kasir
export const createKasir = async (req, res) => {
    try {
        const kasir = await Kasir.create(req.body);
        res.status(201).json({ msg: "Kasir Created", data: kasir });
    } catch (error) {
        console.error(error.message);
        if (error.message.includes("Validation error")) {
            res.status(500).json({ error: 'Kode Kasir sudah ada.' });
        }
        else {
            res.status(500).json({ error: 'Terjadi kesalahan dalam membuat Kasir.' });
        }
    }
}

// Get all Kasir
export const getAllKasir = async (req, res) => {
    try {
        const kasirList = await Kasir.findAll();
        console.log(kasirList);
        res.status(200).json(kasirList);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Kasir.' });
    }
}

// Get a specific Kasir by KodeKasir
export const getKasirById = async (req, res) => {
    const { KodeKasir } = req.params;
    try {
        const kasir = await Kasir.findOne({ where: { KodeKasir } });
        if (kasir) {
            res.status(200).json(kasir);
        } else {
            res.status(404).json({ msg: "Kasir not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Kasir.' });
    }
}

// Update a specific Kasir by KodeKasir
export const updateKasir = async (req, res) => {
    const { KodeKasir } = req.params;
    try {
        const [updated] = await Kasir.update(req.body, { where: { KodeKasir } });
        if (updated) {
            res.status(201).json({ msg: "Kasir updated" });
        } else {
            res.status(404).json({ msg: "Kasir not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Kasir" });
    }
}

// Delete a specific Kasir by KodeKasir
export const deleteKasir = async (req, res) => {
    const { KodeKasir } = req.params;
    try {
        const deleted = await Kasir.destroy({ where: { KodeKasir } });
        if (deleted) {
            res.status(200).json({ msg: "Kasir berhasil dihapus" });
        } else {
            res.status(404).json({ msg: "Kasir tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Kasir" });
    }
}
