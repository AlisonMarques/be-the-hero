const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {
   // faz a listagem
    async index(request, response){
        const ongs = await connection('ongs').select('*');
     
        return response.json(ongs);
},
    //Faz a criaçao da tabela
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        //CRIANDO UMA ID PARA QUE O USUÁRIO N POSSA ESCOLHER
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });
    }
};