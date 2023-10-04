const planets = require('./planets.json');
const axios = require('axios');

module.exports = {
    list: async () => {
        
        try{
            const response = await axios.get("http://database:8004/Planet");
            return response.data;
        }catch (errors) {
            console.error(errors);
          }
    },

    create: async () => {
        throw Error("Hay un error al momento de crear la película");
    }

}