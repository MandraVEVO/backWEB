import HorarioController from '../controllers/Horario.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para horarios
router.post('/Horario', HorarioController.post);
router.get('/Horario', HorarioController.getAll);
router.get('/Horario/:id', HorarioController.getById);
router.put('/Horario/:id', HorarioController.update);
router.delete('/Horario/:id', HorarioController.remove);

export default router;