import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "sugerencias";

class Sugerencias extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Sugerencias",
            timestamps: false
        }
    }
}

const SugerenciasScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nombre",
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "apellido",
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "correo",
    },
    sugerencia: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "sugerencia",
    }
}

export { Sugerencias, SugerenciasScheme };