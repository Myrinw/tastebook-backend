const { Router } = require('express');
const authMidleware = require('../auth/middleware');
const express = require('express');
const router = new Router();
const Following = require('../models').follower;

router.get('/', async (req, res, next) => {
    try {
        const followers = await Following.findAll();
        res.send(followers);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const followers = await Following.findAll({
            where: {
                userId: id,
            }
        })
    } catch (e) {
        next(e);
    }
});

router.get('/following/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const following = await Following.findAll({
            where: {
                followerId: id
            }
        });
    } catch (e) {
        next(e)
    }
});

router.post('/', authMidleware, async (req, res, next) => {
    const { userId, followerId } = req.body;
    if (!userId || !followerId) {
        res.status(404).send("missing body");
    }

    try {
        const newFollower = await Following.create({
            userId,
            followerId
        });
        res.send(newFollower);
    } catch (e) {
        next(e);
    }
});

router.delete('/', authMidleware, async (req, res, next) => {
    const { userId, followerId } = req.body;
    if (!userId || !followerId) {
        res.status(404).send("missing paramaters");
    }

    try {
        const deleteFollowing = await Following.destroy({
            where: {
                userId,
                followerId
            }
        });
        res.send(deleteFollowing);
    } catch (e) {
        next(e);
    }
})

module.exports = router