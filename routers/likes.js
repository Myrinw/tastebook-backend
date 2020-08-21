const { Router } = require('express');
const authMidleware = require('../auth/middleware');
const router = new Router();
const likes = require('../models').like;

router.get('/:id', async (req, res, next) => {
    const userId = req.params.id;
    try {
        const userLikes = await likes.findAll({
            where: {
                userId: userId
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