import BoletoService from '../services/Boleto.service.js';

const boletoService = new BoletoService();

const post = async (req, res) => {
    try {
        const boleto = await boletoService.create(req.body);
        res.status(201).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const boleto = await boletoService.getAll();
        res.status(200).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const boleto = await boletoService.getById(req.params.id);
        res.status(200).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const boleto = await boletoService.update(req.params.id, req.body);
        res.status(200).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const boleto = await boletoService.delete(req.params.id);
        res.status(200).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {post, getAll, getById, update, remove};