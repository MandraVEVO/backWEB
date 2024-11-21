import PromocionService from '../services/Promocion.service.js';

const promocionService = new PromocionService();

const post = async (req, res) => {
    try {
        const promocion = await promocionService.create(req.body);
        res.status(201).json(promocion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const getAll = async (req, res) => {
    try {
        const promocion = await promocionService.getAll();
        res.status(200).json(promocion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const getById = async (req, res) => {
    try {
        const promocion = await promocionService.getById(req.params.id);
        res.status(200).json(promocion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const update = async (req, res) => {
    try {
        const promocion = await promocionService.update(req.params.id, req.body);
        res.status(200).json(promocion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const remove = async (req, res) => {
    try {
        const promocion = await promocionService.delete(req.params.id);
        res.status(200).json(promocion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

export default { post, getAll, getById, update, remove };