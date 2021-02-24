//route for recipes

const express = require('express')
const db = require('../models')
const router = express.Router()

//GET all recipes 

router.get('/', (req,res) => {
    db.recipe.finAll()
    .then((recipes) => {
        res.render('recipe/explore', {recipes:recipes})
    }).catch((error) => {
        res.status(404).render('main/404')
    })
})