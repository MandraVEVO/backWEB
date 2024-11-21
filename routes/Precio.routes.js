import PrecioController from '../controllers/Precio.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para precios
router.post('/Precio', PrecioController.post);
router.get('/Precio', PrecioController.getAll);
router.get('/Precio/:id', PrecioController.getById);
router.put('/Precio/:id', PrecioController.update);
router.delete('/Precio/:id', PrecioController.remove);

export default router;