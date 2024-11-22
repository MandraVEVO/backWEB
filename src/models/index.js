import { Sequelize } from "sequelize";
import config from "../config/config.js";
import { Usuarios, UsuariosScheme } from "../models/Usuarios.js";
import {Horario, HorarioScheme} from "../models/Horario.js";
import {Precio, PrecioScheme} from "../models/Precio.js";
import {Promocion, PromocionScheme} from "../models/Promocion.js";
import {Sugerencias, SugerenciasScheme} from "../models/Sugerencias.js";
import {Terminal, TerminalScheme} from "../models/Terminal.js";
import {Boleto, BoletoScheme} from "../models/Boleto.js";

/* Configura las tablas */
function setupModels(sequelize) {
  Usuarios.init(UsuariosScheme, Usuarios.config(sequelize));
  Horario.init(HorarioScheme, Horario.config(sequelize));
  Precio.init(PrecioScheme, Precio.config(sequelize));
  Promocion.init(PromocionScheme, Promocion.config(sequelize));
  Sugerencias.init(SugerenciasScheme, Sugerencias.config(sequelize));
  Terminal.init(TerminalScheme, Terminal.config(sequelize));
  Boleto.init(BoletoScheme, Boleto.config(sequelize));


  // Relaciones
  Precio.hasOne(Horario); // Precio hereda a Boleto
  Horario.belongsTo(Precio); // Boleto pertenece a Precio

  /* Relación Boleto y Horario */
  Horario.hasOne(Boleto); // Horario hereda a Boleto
  Boleto.belongsTo(Horario); // Boleto pertenece a Horario

  /* Relación Boleto y Promoción */
  Promocion.hasOne(Precio); // Promoción hereda a Boleto
  Precio.belongsTo(Promocion); // Boleto pertenece a Promoción

  Usuarios.hasOne(Boleto); // Usuario hereda a Boleto
  Boleto.belongsTo(Usuarios); // Boleto pertenece a Usuario

  Terminal.hasMany(Horario); // Terminal hereda a Boleto 
  Horario.belongsTo(Terminal); // Boleto pertenece a Terminal

 

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

export { setupModels, Usuarios, Horario, Precio, Promocion, Sugerencias, Terminal, Boleto };
