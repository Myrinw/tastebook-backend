const { Router } = require('express');
const authMidleware = require('../auth/middleware');
const e = require('express');
const router = new Router();
const comments = require('../models').comment;

router.post('/', authMidleware, async (req, res, next) => {
    const { text, userId, postId } = req.body
    if (!text) {
        res.status(401).send('missing paramters');
    } else {
        try {
            const newComment = await comments.create({
                text,
                userId,
                postId
            });
            res.json(newComment);

        } catch (e) {
            next(e);
        }
    }
});

router.get('/', (req, res) => res.send('comments!'));
module.exports = router