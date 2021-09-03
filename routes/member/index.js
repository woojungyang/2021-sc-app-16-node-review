const path = require('path')
const express = require('express')
const router = express.Router()

const joinRouter = require('./join-router')

router.use('/join', joinRouter)

module.exports = router