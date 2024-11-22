import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "boleto";

class Boleto extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Boleto",
            timestamps: false
        }
    }
}

const BoletoScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }
}

export { Boleto, BoletoScheme };