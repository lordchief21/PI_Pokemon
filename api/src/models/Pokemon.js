const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique:true,

    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    health: {
      type: DataTypes.INTEGER,

    },

    strength: {
      type: DataTypes.INTEGER,

    },

    defense: {
      type: DataTypes.INTEGER,
    },
    
    speed: {
      type:DataTypes.INTEGER,
    },
    
    height: {
      type: DataTypes.INTEGER,

    },

    weight: {
      type: DataTypes.INTEGER
    },
    createdInDatabase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
  
    }, 
  }, {
    timestamps: false
  }
);





};

