import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "horario";

class Horario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Horario",
            timestamps: false
        }
    }
}

const HorarioScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    hora_Salida: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "hora_Salida",
    },
    hora_Llegada: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "hora_Llegada",
    },
    terminal_Origen: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "terminal_Origen",
    },
    terminal_Destino: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "terminal_Destino",
    },
  
}

export { Horario, HorarioScheme };