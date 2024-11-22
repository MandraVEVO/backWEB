import {Boleto} from '../src/models/Boleto.js';

class BoletoService{
    constructor(){}
    async create(data){
        return await Boleto.create(data);
    }
    async getAll(){
        return await Boleto.findAll();
    }
    async getById(id){
        return await Boleto.findByPk(id);
    }
    async update(id, data){
        const boleto = await Boleto.findByPk(id);
        return await boleto.update(data);
    }
    async delete(id){
        const boleto = await Boleto.findByPk(id);
        await boleto.destroy();
        return {deleted: true};
    }
}

export default BoletoService;