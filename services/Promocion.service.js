import { Promocion } from "../src/models/Promocion.js";

class PromocionService{
    constructor(){}
    async create(data){
        return await Promocion.create(data);
    }
    async getAll(){
        return await Promocion.findAll();
    }
    async getById(id){
        return await Promocion.findByPk(id);
    }
    async update(id, data){
        const promocion = await Promocion.findByPk(id);
        return await promocion.update(data);
    }
    async delete(id){
        const promocion = await Promocion.findByPk(id);
        await promocion.destroy();
        return {deleted: true};
    }
}

export default PromocionService;