import { Terminal } from "../src/models/Terminal.js";

class TerminalService{
    constructor(){}
    async create(data){
        return await Terminal.create(data);
    }
    async getAll(){
        return await Terminal.findAll();
    }
    async getById(id){
        return await Terminal.findByPk(id);
    }
    async update(id, data){
        const terminal = await Terminal.findByPk(id);
        return await terminal.update(data);
    }
    async delete(id){
        const terminal = await Terminal.findByPk(id);
        await terminal.destroy();
        return {deleted: true};
    }
}

export default TerminalService;