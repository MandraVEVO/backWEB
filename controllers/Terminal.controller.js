import TerminalService from '../services/Terminal.service.js';

const terminalService = new TerminalService();

const post = async (req, res) => {
    try {
        const terminal = await terminalService.create(req.body);
        res.status(201).json(terminal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const terminal = await terminalService.getAll();
        res.status(200).json(terminal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const terminal = await terminalService.getById(req.params.id);
        res.status(200).json(terminal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const terminal = await terminalService.update(req.params.id, req.body);
        res.status(200).json(terminal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const terminal = await terminalService.delete(req.params.id);
        res.status(200).json(terminal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { post, getAll, getById, update, remove };