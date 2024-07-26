const { getAll, create, getOne } = require('../controllers/song.controllers');
const express = require('express');
const songRouter = express.Router();

songRouter.route("/")
    .get(getAll)
    .post(create)

songRouter.route("/:id")
    .get(getOne)


module.exports = songRouter;