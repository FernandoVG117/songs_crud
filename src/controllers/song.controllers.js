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
    
    if(!result) return res.sendStatus(404)
    
    return res.json(result)
})

const destroy = catchError(async(req,res) => {
    const { id } = req.params
    const result = await Song.destroy({where:{id}})

    if(!result) return res.sendStatus(404)
    
    return res.sendStatus(204)
})

const update = catchError(async(req,res) => {
    const { id } = req.params
    const song = await Song.update(
        req.body,
        {
            where: {id},
            returning: true,
        }
    )
    if(song[0] === 0) return res.sendStatus(404)
    return res.status(200).json(song[1][0])
})



module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}