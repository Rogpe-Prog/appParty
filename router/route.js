const express = require('express')
const partyController = require('../controllers/party')


const router = express.Router()

const Party = require('../models/party')
const models = {
    Party
}

router.get('/', (req, res) => res.render('index'))

router.get('/index', partyController.parties.bind(null, models))
router.get('/contact', (req, res) => res.render('partials/contact'))

router.get('/parties', partyController.parties.bind(null, models))

router.get('/new', partyController.newForm)
router.post('/new', partyController.newProcess.bind(null, models))

router.get('/edit/:id', partyController.editForm.bind(null, models))
router.post('/edit/:id', partyController.editProcess.bind(null, models))

router.get('/deletes/:id', partyController.deletes.bind(null, models))


module.exports = router