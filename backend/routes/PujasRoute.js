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

import{
    createTenan,
    getAllTenan,
    getTenanById,
    updateTenan,
    deleteTenan,
} from '../controllers/TenanController.js';


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

//tenan Routes
router.post('/tenan', createTenan);
router.get('/tenan', getAllTenan);
router.get('/tenan/:KodeTenan', getTenanById);
router.put('/tenan/:KodeTenan', updateTenan);
router.delete('/tenan/:KodeTenan', deleteTenan);



export default router;
