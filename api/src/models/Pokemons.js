const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemons', {
    

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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

    image: {
      type: DataTypes.TEXT
    },
    
    createdInDatabase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
  
    },
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      

    },
  }, {
    timestamps: false
  }
);





};

