const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    const result = await Song.findAll(req.body)
    return res.status(200).json(result)
});

const create = catchError(async(req,res) => {
    const result = await Song.create(req.body)
    return res.status(201).json(result)
})

const getOne = catchError(async(req,res) => {
    const { id } = req.params
    const result = await Song.findByPk(id)
    return res.json(result)
})



module.exports = {
    getAll,
    create,
    getOne
}