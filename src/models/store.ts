import { dbConnection } from "../bdConnection";
const { DataTypes } = require('sequelize');

export const Store = dbConnection.getConnection().define('store', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
        //defaultValue: "AUCTION_STORE"
    },
    visibility: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: true
    }
  }, {
    // Other model options go here
  }); 

  /*
  Store.associate = function(models) {
    // associations can be defined here
    Store.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };
  */