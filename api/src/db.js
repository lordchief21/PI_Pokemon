require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemons, DbTypes } = sequelize.models;

// Aca vendrian las relaciones
Pokemons.belongsToMany(DbTypes, {through: "pokemonDbrTypes"});
DbTypes.belongsToMany(Pokemons, {through: "pokemonDbrTypes"});

// Este espacio es para testear mi DB
// sequelize.sync({force: false})
// .then( async() => {
//   const poke1 = await Pokemon.create({
//     name: "Frodo",
//     health: 5000,
//     strength: 8000,
//     defense: 10,
//     speed: 150,
//     heigth: 800,
//     weigth: 8000,

//   });
//   const poke2 = await Pokemon.create({
//     name: "Smeagol",
//     health: 6000,
//     strength: 9000,
//     defense: 40,
//     speed: 250,
//     heigth: 900,
//     weigth: 3000,

//   })
//   console.log("Pokemon creado")
// })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
