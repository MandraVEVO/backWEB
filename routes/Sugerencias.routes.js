import SugerenciasController from '../controllers/Sugerencias.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para sugerencias
router.post('/Sugerencias', SugerenciasController.post);
router.get('/Sugerencias', SugerenciasController.getAll);
router.get('/Sugerencias/:id', SugerenciasController.getById);
router.put('/Sugerencias/:id', SugerenciasController.update);
router.delete('/Sugerencias/:id', SugerenciasController.remove);

export default router;