const { Router } = require('express');
const router = new Router();
const authMidleware = require('../auth/middleware');
const Posts = require('../models').post;


const { user, post, like, comment } = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const posts = await post.findAll({
            limit: 10,
            include: [user, like, comment]
        });
        res.send(posts);
    } catch (e) {
        next(e)
    }

});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const singlePost = await post.findByPk(4, {
            include: [user, like, comment]
        })
        res.json(singlePost);
    } catch (e) {
        next(e);
    }
})

router.post('/', authMidleware, async (req, res, next) => {
    const { title, text, image, userId } = req.body;
    console.log(req.body);
    if (!title || !text || !image || !userId) {
        console.log("pppp");
        res.status(400).send("missing parameters")
    } else {
        try {

            const newPost = await Posts.create({
                title,
                text,
                image,
                userId
            });
            res.json(newPost)
        } catch (e) {
            next(e);
        }
    }
})

router.get('/3', async (req, res, next) => {
    try {
        const posts = await post.findAll({
            limit: 3
        })
        if (!posts) {
            res.status(404).send("posts not found");
        } else {
            res.send(posts);
        }
    } catch{

    }
})

module.exports = router