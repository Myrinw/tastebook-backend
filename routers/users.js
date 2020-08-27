const { Router } = require('express');
const router = new Router();
const Users = require('../models').user;
const Post = require('../models').post;
const Food = require('../models').food
const bcrypt = require('bcrypt')
const authMidleware = require('../auth/middleware');
const { toData } = require("../auth/jwt");



router.get('/', async (req, res, next) => {
    console.log("reached the router");
    try {
        const users = await Users.findAll({
            include: [Food],
        });
        res.send(users);
    } catch (e) {
        next(e)
    }
})

router.post('/me', async (req, res, next) => {
    console.log('testetse')
    const { token } = req.body;
    const data = toData(token);
    try {
        const user = await Users.findByPk(data.userId, {
            include: [Post, Food]
        });
        res.send(user);
    } catch (e) {
        next(e);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { email, password, username, bio } = req.body;
        if (!email || !password || !username || !bio) {
            res.status(400).send("missing parameters");
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const newUser = await Users.create({
                email,
                password: hashedPassword,
                username,
                bio
            });
            res.json(newUser);
        }
    } catch (e) {
        next(e)
    }
})



module.exports = router;
