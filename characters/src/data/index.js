//const characters = require('./characters.json');
const axios = require('axios')

module.exports = {
    list: async () => {
        try{
            const response = await axios.get("http://database:8004/Character");
            return response.data;
        }catch(e){
            return {error:e.message};
        }
        
    },

    create: async () => {
        throw Error("Hay un error al momento de crear el personaje");
    }

}