const express = require('express');
const userRouter = require('./routers/users');
const loginRouter = require('./routers/auth');
const postsRouter = require('./routers/posts');
const cors = require('cors');

const app = express();
const port = 4000;
const Likes = require('./models').like;
const Comments = require('./models').comment;
const Followers = require('./models').follower;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/posts', postsRouter);

app.get('/likes', async (req, res, next) => {
    try {
        const likes = await Likes.findAll();
        res.send(likes);
    } catch (e) {
        next(e)
    }
});



app.get('/comments', async (req, res, next) => {
    try {
        const comments = await Comments.findAll();
        res.send(comments);
    } catch (e) {
        next(e)
    }

})
app.get('/followers', async (req, res, next) => {
    try {
        const followers = await Followers.findAll();
        res.send(followers);
    } catch (e) {
        next(e)
    }

})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})