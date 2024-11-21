import UsuariosController from '../controllers/Usuarios.controller.js';
import { Router } from 'express';

const router = Router();

// Rutas para usuarios
router.post('/Usuarios', UsuariosController.post);
router.get('/Usuarios', UsuariosController.getAll);
router.get('/Usuarios/:id', UsuariosController.getById);
router.put('/Usuarios/:id', UsuariosController.update);
router.delete('/Usuarios/:id', UsuariosController.remove);

export default router;
