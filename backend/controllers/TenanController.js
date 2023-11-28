import Tenan from '../models/Tenan.js';

// Create a new Tenan
export const createTenan = async (req, res) => {
    try {
        const tenan = await Tenan.create(req.body);
        res.status(201).json({ msg: "Tenan Created", data: tenan });
    } catch (error) {
        console.error(error.message);
        if (error.message.includes("Validation error")) {
            res.status(500).json({ error: 'Kode Tenan sudah ada.' });
        }
        else {
            res.status(500).json({ error: 'Terjadi kesalahan dalam membuat Tenan.' });
        }
    }
}

// Get all Tenan
export const getAllTenan = async (req, res) => {
    try {
        const tenanList = await Tenan.findAll();
        console.log(tenanList);
        res.status(200).json(tenanList);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Tenan.' });
    }
}

// Get a specific Tenan by KodeTenan
export const getTenanById = async (req, res) => {
    const { KodeTenan } = req.params;
    try {
        const tenan = await Tenan.findOne({ where: { KodeTenan } });
        if (tenan) {
            res.status(200).json(tenan);
        } else {
            res.status(404).json({ msg: "Tenan not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Tenan.' });
    }
}

// Update a specific Tenan by KodeTenan
export const updateTenan = async (req, res) => {
    const { KodeTenan } = req.params;
    try {
        const [updated] = await Tenan.update(req.body, { where: { KodeTenan } });
        if (updated) {
            res.status(201).json({ msg: "Tenan updated" });
        } else {
            res.status(404).json({ msg: "Tenan not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Tenan" });
    }
}

// Delete a specific Tenan by KodeTenan
export const deleteTenan = async (req, res) => {
    const { KodeTenan } = req.params;
    try {
        const deleted = await Tenan.destroy({ where: { KodeTenan } });
        if (deleted) {
            res.status(200).json({ msg: "Tenan berhasil dihapus" });
        } else {
            res.status(404).json({ msg: "Tenan tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Tenan" });
    }
}
