import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "terminales";

class Terminal extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Terminal",
            timestamps: false
        }
    }
}

const TerminalScheme = {
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
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "ubicacion",
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "contacto",
    }
}

export { Terminal, TerminalScheme };