const { DbTypes} = require('../db');
const axios = require('axios');


 async function getTypesPoke() {
    const pokeAxiosTypes =  await axios('https://pokeapi.co/api/v2/type').then( e => e.data.results);
    const pokeTypesName = pokeAxiosTypes.map(e => e.name)
    
     const uploadDbTypes = pokeTypesName?.forEach( e => DbTypes.findOrCreate({where: {name: e}}))

     const uploadedToDbTypes = uploadDbTypes?.findAll()

    

    return  uploadedToDbTypes;
}




module.exports = {
    getTypesPoke,
}