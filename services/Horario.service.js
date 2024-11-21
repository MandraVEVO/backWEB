import { Horario } from "../src/models/Horario.js";

class HorarioService{
    constructor(){}
    async create(data){
        return await Horario.create(data);
    }
    async getAll(){
        return await Horario.findAll();
    }
    async getById(id){
        return await Horario.findByPk(id);
    }
    async update(id, data){
        const horario = await Horario.findByPk(id);
        return await horario.update(data);
    }
    async delete(id){
        const horario = await Horario.findByPk(id);
        await horario.destroy();
        return {deleted: true};
    }
}

export default HorarioService;