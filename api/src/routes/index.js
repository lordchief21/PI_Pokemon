const { Router } = require('express');
const {Pokemon, Types} = require('../db');
const axios = require('axios');
const {getAllPokemons} = require('../controllers/pokemonController')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

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
    const typePokemonApi = (await axios('https://pokeapi.co/api/v2/type')).data.results;
    // console.log(typePokemonApi)
    const typesPokemon= typePokemonApi.map(t => t.name);
    console.log(typesPokemon)

    typesPokemon.forEach(t => {
        Types.findOrCreate({
            where: {name: t}

        })
    })

    const uploadDbTypes = await Types.findAll();

    res.send(uploadDbTypes)


});

router.post('/pokemons', async (req, res) => {
    
    // Declaramos lo que recibiremos del body
    let {
        name,
        health,
        strength,
        defense,
        speed,
        height,
        weight,
        type,
        createdInDatabase

    } = req.body;

    //Creamos el Pokemón en la base de datos (OJO: SABER QUE EL TYPE ESTA RELACIONADA Y SE ENCUENTRA EN OTRA DB)

    let pokemonCreated = await Pokemon.create ({name, health, strength, defense, speed, height, weight, type, createdInDatabase});

    //Aqui posteamos el "type" que tenemos relacionado

    let typeIndDb = await Types.findAll({where: {name: type} });
    
    
    pokemonCreated.addTypes(typeIndDb);
    res.send('Un nuevo Pokemon ha nacido! ');
})



// router.get(`/pokemons/${id}`, async(req, res))


module.exports = router;
