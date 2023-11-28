import express from 'express';
import {
    createBarang,
    getAllBarang,
    getBarangById,
    updateBarang,
    deleteBarang,
} from '../controllers/BarangController.js';

import{
    createKasir,
    getAllKasir,
    getKasirById,
    updateKasir,
    deleteKasir,
} from '../controllers/KasirController.js';

const router = express.Router();

// Barang Routes
router.post('/barang', createBarang);
router.get('/barang', getAllBarang);
router.get('/barang/:KodeBarang', getBarangById);
router.put('/barang/:KodeBarang', updateBarang);
router.delete('/barang/:KodeBarang', deleteBarang);

// Kasir Routes
router.post('/kasir', createKasir);
router.get('/kasir', getAllKasir);
router.get('/kasir/:KodeKasir', getKasirById);
router.put('/kasir/:KodeKasir', updateKasir);
router.delete('/kasir/:KodeKasir', deleteKasir);


export default router;
