const express = require('express');
const {Pokemon, Types} = require('../db');
const axios = require('axios');
const {getAllPokemons} = require('../controllers/pokemonController');
const {getTypesPoke} = require('../controllers/dbTypesController');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = express();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) => {

    const namePoke = req.query.name;
    let totalPokemon = await getAllPokemons();


    if(namePoke) {
        let pokemonName = await totalPokemon.filter(el => el.name.toLowerCase().includes(namePoke.toLowerCase()))
        pokemonName.length ?
        res.status(200).send(pokemonName):
        res.status(404).send("Ese Pokemon aún no a sido atrapado");
    
    } else { res.status(200).send(totalPokemon)}

})

router.get('/pokemons/:idPokemon', async (req, res) => {
    let idPoke = req.params.idPokemon;
    const pokemon = await getAllPokemons();
    const pokeInfo = await pokemon.find(i => i.id == idPoke);
    res.json(pokeInfo);
    
})
  

router.get('/type', async ( req, res) => {
   
    const types = await getTypesPoke();
    res.send(types)


});

router.post('/pokemons', async (req, res, next) => {
    const name = req.body.name;

    

})






module.exports = router;
