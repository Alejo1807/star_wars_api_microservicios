const films = require('./films.json');
const axios = require('axios');


module.exports = {
    list: async () => {

        try{
            const response = await axios.get("http://database:8004/Film");
            return response.data;
        }catch (errors) {
            console.error(errors);
          }
    },

    create: async () => {
        throw Error("Hay un error al momento de crear la película");
    }

}