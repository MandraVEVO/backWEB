import { Precio } from "../src/models/Precio.js";
import { Promocion } from "../src/models/Promocion.js";

class PrecioService{
    constructor(){}
    async create(data){
        return await Precio.create(data);
    }
    async getAll(){
        return await Precio.findAll({
            include: [
                Promocion 
            ]
        });
    }
    async getById(id){
        return await Precio.findByPk(id,{
            include: [
                Promocion 
            ]
        });
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