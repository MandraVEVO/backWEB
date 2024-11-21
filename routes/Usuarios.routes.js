import UsuariosController from '../controllers/Usuarios.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para usuarios
router.post('/usuarios', UsuariosController.post);
router.get('/usuarios', UsuariosController.getAll);
router.get('/usuarios/:id', UsuariosController.getById);
router.put('/usuarios/:id', UsuariosController.update);
router.delete('/usuarios/:id', UsuariosController.remove);

export default router;
