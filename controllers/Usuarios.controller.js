import UsuariosService from "../services/Usuarios.service.js";

const usuariosService = new UsuariosService();

const post = async (req, res) => {
  try {
    const usuarios = await usuariosService.create(req.body);
    res.status(201).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const usuarios = await usuariosService.getAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const usuarios = await usuariosService.getById(req.params.id);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const usuarios = await usuariosService.update(req.params.id, req.body);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const usuarios = await usuariosService.delete(req.params.id);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  post,
  getAll,
  getById,
  update,
  remove,
};
