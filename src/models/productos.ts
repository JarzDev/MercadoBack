import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import usersModel from "./users";

const productoModel = db.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      producto: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      precio: {
        type: DataTypes.INTEGER ,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
       fecha:{
      type :DataTypes.DATE,
      allowNull:false
      },
      listo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }

    }, {
      tableName: 'productos',
      timestamps: false
    });
    productoModel.belongsTo(usersModel, {foreignKey: 'user_id'});

export default productoModel;
