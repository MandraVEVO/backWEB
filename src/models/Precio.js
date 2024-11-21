import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "precio";

class Precio extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Precio",
            timestamps: false
        }
    }
}

const PrecioScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    precio_Ida: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "precio_Ida",
    },
    precio_Regreso: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "precio_Regreso",
    },
}

export { Precio, PrecioScheme };