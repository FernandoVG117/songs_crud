const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    const result = await Song.findAll(req.body)
    return res.json(result)
});



module.exports = {
    getAll
}