const { getAll, create, getOne, destroy } = require('../controllers/song.controllers');
const express = require('express');
const songRouter = express.Router();

songRouter.route("/")
    .get(getAll)
    .post(create)

songRouter.route("/:id")
    .get(getOne)
    .delete(destroy)


module.exports = songRouter;