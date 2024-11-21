import SugerenciasService from '../services/Sugerencias.service.js';

const sugerenciasService = new SugerenciasService();

const post = async (req, res) => {
    try {
        const sugerencias = await sugerenciasService.create(req.body);
        res.status(201).json(sugerencias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const getAll = async (req, res) => {
    try {
        const sugerencias = await sugerenciasService.getAll();
        res.status(200).json(sugerencias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const getById = async (req, res) => {
    try {
        const sugerencias = await sugerenciasService.getById(req.params.id);
        res.status(200).json(sugerencias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const update = async (req, res) => {
    try {
        const sugerencias = await sugerenciasService.update(req.params.id, req.body);
        res.status(200).json(sugerencias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const remove = async (req, res) => {
    try {
        const sugerencias = await sugerenciasService.delete(req.params.id);
        res.status(200).json(sugerencias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

export default { post, getAll, getById, update, remove };