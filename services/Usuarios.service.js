import { Usuarios } from "../src/models/index.js";

class UsuariosService{
    constructor(){}
    async create(data){
        return await Usuarios.create(data);
    }
    async getAll(){
        return await Usuarios.findAll();
    }
    async getById(id){
        return await Usuarios.findByPk(id);
    }
    async update(id, data){
        const usuarios = await Usuarios.findByPk(id);
        return await usuarios.update(data);
    }
    async delete(id){
        const usuarios = await Usuarios.findByPk(id);
        await usuarios.destroy();
        return {deleted: true};
    }
}

export default UsuariosService;