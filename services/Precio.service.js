import { Precio } from "../src/models/Precio.js";

class PrecioService{
    constructor(){}
    async create(data){
        return await Precio.create(data);
    }
    async getAll(){
        return await Precio.findAll();
    }
    async getById(id){
        return await Precio.findByPk(id);
    }
    async update(id, data){
        const precio = await Precio.findByPk(id);
        return await precio.update(data);
    }
    async delete(id){
        const precio = await Precio.findByPk(id);
        await precio.destroy();
        return {deleted: true};
    }
}

export default PrecioService;