import {Sequelize}  from "sequelize";
import  config   from "../../config/config.js";

/* aqui las pinches tablas */
function setupModels(sequelize)
{
 
}

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres'
});

sequelize.sync();
setupModels(sequelize);

export { setupModels};    


