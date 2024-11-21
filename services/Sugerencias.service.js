import { Sugerencias } from "../src/models/Sugerencias.js";

class SugerenciasService{
    constructor(){}
    async create(data){
        return await Sugerencias.create(data);
    }
    async getAll(){
        return await Sugerencias.findAll();
    }
    async getById(id){
        return await Sugerencias.findByPk(id);
    }
    async update(id, data){
        const sugerencias = await Sugerencias.findByPk(id);
        return await sugerencias.update(data);
    }
    async delete(id){
        const sugerencias = await Sugerencias.findByPk(id);
        await sugerencias.destroy();
        return {deleted: true};
    }
}

export default SugerenciasService;