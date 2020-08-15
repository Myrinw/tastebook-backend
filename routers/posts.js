const { Router } = require('express');
const router = new Router();
const Posts = require('../models').post;

router.get('/', async (req, res, next) => {
    try {
        const posts = await Posts.findAll({
            limit: 10
        });
        res.send(posts);
    } catch (e) {
        next(e)
    }

});

module.exports = router