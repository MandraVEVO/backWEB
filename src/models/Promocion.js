import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "promocion";

class Promocion extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Promocion",
            timestamps: false
        }
    }
}

const PromocionScheme = {
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
    descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "descuento",
    },
    fecha_inicio: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "fecha_inicio",
    },
    fecha_fin: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "fecha_fin",
    }
}

export { Promocion, PromocionScheme };