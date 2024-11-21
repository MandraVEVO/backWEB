import HorarioService from '../services/Horario.service.js';

const horarioService = new HorarioService();

const post = async (req, res) => {
    try {
        const horario = await horarioService.create(req.body);
        res.status(201).json(horario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const horario = await horarioService.getAll();
        res.status(200).json(horario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const horario = await horarioService.getById(req.params.id);
        res.status(200).json(horario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const horario = await horarioService.update(req.params.id, req.body);
        res.status(200).json(horario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const horario = await horarioService.delete(req.params.id);
        res.status(200).json(horario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {post, getAll, getById, update, remove};
