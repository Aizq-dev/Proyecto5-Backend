const express = require('express')
const { getAllAutos, getAutoById, createAuto, updateAutoById, deleteAuto } = require('../controllers/autos')


const router = express.Router()

router.get('/',getAllAutos)
router.get('/:id',getAutoById)
router.post('/',createAuto)
router.put('/:id', updateAutoById)
router.delete('/:id',deleteAuto)

module.exports = router