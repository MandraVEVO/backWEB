import express from 'express';
import UsuariosController from '../controllers/Usuarios.controller.js';

const router = express.Router();

router
    .get("/Usuarios", UsuariosController.getAll)
    .get('/Usuarios/:id', UsuariosController.getById)
    .post('/Usuarios', UsuariosController.post)
    .put('/Usuarios/:id', UsuariosController.update)
    .delete('/Usuarios/:id', UsuariosController.remove);

export default router;

    