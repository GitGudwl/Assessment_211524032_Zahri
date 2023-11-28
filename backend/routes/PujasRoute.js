import express from 'express';
import {
    createBarang,
    getAllBarang,
    getBarangById,
    updateBarang,
    deleteBarang,
} from '../controllers/BarangController.js';

const router = express.Router();

// Barang Routes
router.post('/barang', createBarang);
router.get('/barang', getAllBarang);
router.get('/barang/:KodeBarang', getBarangById);
router.put('/barang/:KodeBarang', updateBarang);
router.delete('/barang/:KodeBarang', deleteBarang);

export default router;
