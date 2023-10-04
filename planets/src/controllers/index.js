const getPlanets = require('./getPlanets');
const createPlanets = require('./createPlanets')
const { catchAsync } = require('../utils')

module.exports={
    getPlanets:catchAsync(getPlanets),
    createPlanets:catchAsync(createPlanets),
}