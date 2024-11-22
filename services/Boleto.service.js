
import { Model } from 'sequelize';
import {Boleto} from '../src/models/Boleto.js';
import {Horario} from '../src/models/Horario.js';
import {Precio} from '../src/models/Precio.js';
import {Promocion} from '../src/models/Promocion.js';
import {Terminal} from '../src/models/Terminal.js';
import {Usuarios} from '../src/models/Usuarios.js';
class BoletoService{
    constructor(){}
    async create(data){
        return await Boleto.create(data);
    }
    async getAll(){
        return await Boleto.findAll({
            include: [
                Horario,Precio,Promocion,Terminal,Usuarios
           ]
        });
    }
    async getById(id){
        return await Boleto.findByPk(id,{
            include: [
                 {
                    model: Horario,
                    include: [
                        {
                            model: Precio,
                            include: [Promocion]
                        },
                        Terminal
                    ]
                 }
                 ,Usuarios
            ]
        });
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