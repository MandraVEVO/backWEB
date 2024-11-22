import BoletoController from '../controllers/Boleto.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para boletos
router.post('/Boleto', BoletoController.post);
router.get('/Boleto', BoletoController.getAll);
router.get('/Boleto/:id', BoletoController.getById);
router.put('/Boleto/:id', BoletoController.update);
router.delete('/Boleto/:id', BoletoController.remove);

export default router;