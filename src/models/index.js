import { Sequelize } from "sequelize";
import config from "../config/config.js";
import { Usuarios, UsuariosScheme } from "../models/Usuarios.js";

/* Configura las tablas */
function setupModels(sequelize) {
  Usuarios.init(UsuariosScheme, Usuarios.config(sequelize));
}

const sequelize = new Sequelize(
  config.dbName,    // Nombre de la base de datos
  config.dbUser,    // Usuario
  config.dbPassword, // Contraseña
  {
    host: config.dbHost,
    port: config.dbPort, // Puerto
    dialect: "postgres", // Tipo de base de datos
  }
);

/* Sincroniza modelos */
sequelize.sync();
setupModels(sequelize);

/* Prueba la conexión */
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error.message);
  }
})();

export { setupModels, Usuarios };
