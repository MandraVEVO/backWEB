import TerminalController from '../controllers/Terminal.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para terminales
router.post('/Terminales', TerminalController.post);
router.get('/Terminales', TerminalController.getAll);
router.get('/Terminales/:id', TerminalController.getById);
router.put('/Terminales/:id', TerminalController.update);
router.delete('/Terminales/:id', TerminalController.remove);

export default router;