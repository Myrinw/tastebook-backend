const { Router } = require('express');
const authMidleware = require('../auth/middleware');
const router = new Router();
const likes = require('../models').like;

router.get('/', async (req, res, next) => {
    try {
        const allLikes = await likes.findAll();
        res.json(allLikes);
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    const postId = req.params.id;
    try {
        const userLikes = await likes.findAll({
            where: {
                postId
            }
        });
        res.json(userLikes);
    } catch (e) {
        next(e);
    }
});

router.delete('/delete', authMidleware, async (req, res, next) => {
    const { userId, postId } = req.body;
    if (!userId || !postId) {
        res.status(404).send("missing paramters");
    }
    try {
        const eraseLikes = await likes.destroy({
            where: {
                userId,
                postId
            }
        });
        res.json(eraseLikes);

    } catch (e) {
        next(e);
    }

})

router.post('/', authMidleware, async (req, res, next) => {
    const { userId, postId } = req.body;
    if (!userId || !postId) {
        res.status(404).send('missing paramters');
    }
    try {
        const newLike = await likes.create({
            userId,
            postId
        })
        res.json(newLike);

    } catch (e) {
        next(e);
    }
})

module.exports = router