import PromocionController from '../controllers/Promocion.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para promociones
router.post('/Promocion', PromocionController.post);
router.get('/Promocion', PromocionController.getAll);
router.get('/Promocion/:id', PromocionController.getById);
router.put('/Promocion/:id', PromocionController.update);
router.delete('/Promocion/:id', PromocionController.remove);

export default router;