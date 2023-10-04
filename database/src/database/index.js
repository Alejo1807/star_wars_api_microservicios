const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs')
const characterSchema = require('./schemas/characterSchema');
const filmSchema = require('./schemas/filmSchema');
const planetSchema = require('./schemas/planetSchema');

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character",characterSchema);
const Film = conn.model("Film",filmSchema);
const Planet = conn.model("Planet",planetSchema);


//Character.get(1).then(x => console.log(x));

module.exports={
    Character,
    Film,
    Planet
}