const express = require('express');
const userRouter = require('./routers/users');
const loginRouter = require('./routers/auth');
const postsRouter = require('./routers/posts');
const commentsRouter = require('./routers/comments');
const likesRouter = require('./routers/likes');
const cors = require('cors');

const app = express();
const port = 4000;
const Likes = require('./models').like;
const Comments = require('./models').comment;
const Followers = require('./models').follower;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/posts', postsRouter);

app.use('/comments', commentsRouter);

app.use('/likes', likesRouter);



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})