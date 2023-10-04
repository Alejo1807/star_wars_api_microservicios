const getCharacters = require('./getCharacters');
const createCharacters = require('./createCharacters')
const { catchAsync } = require('../utils')

module.exports={
    getCharacters:catchAsync(getCharacters),
    createCharacters:catchAsync(createCharacters),
}