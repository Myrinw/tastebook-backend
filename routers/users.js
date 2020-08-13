const { Router } = require('express');
const router = new Router();
const Users = require('../models').user;

router.get('/', async (req, res, next) => {
    console.log("reached the router");
    try {
        const users = await Users.findAll();
        res.send(users);
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { email, password }
    } catch (e) {
        next(e)
    }
})

module.exports = router;
