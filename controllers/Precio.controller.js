import PrecioService from '../services/Precio.service.js';

const precioService = new PrecioService();

const post = async (req, res) => {
    try {
        const precio = await precioService.create(req.body);
        res.status(201).json(precio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const precio = await precioService.getAll();
        res.status(200).json(precio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const precio = await precioService.getById(req.params.id);
        res.status(200).json(precio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const precio = await precioService.update(req.params.id, req.body);
        res.status(200).json(precio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const precio = await precioService.delete(req.params.id);
        res.status(200).json(precio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {post, getAll, getById, update, remove};