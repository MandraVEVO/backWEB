import {Sequelize}  from "sequelize";
import  config   from "../../config/config.js";
import {Usuarios, UsuariosScheme} from "../models/Usuarios.js";

/* aqui las pinches tablas */
function setupModels(sequelize)
{
 Usuarios.init(UsuariosScheme, Usuarios.config(sequelize));
}

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres'
});

sequelize.sync();
setupModels(sequelize);

export { setupModels, Usuarios};    


