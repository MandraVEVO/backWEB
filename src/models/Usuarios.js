import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "usuarios";

class Usuarios extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Usuarios",
            timestamps: false
        }
    }
}

const UsuariosScheme = {
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
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "correo",
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "rol",
    }
}

export { Usuarios, UsuariosScheme };