const express = require('express');
const userRouter = require('./routers/users');
const loginRouter = require('./routers/auth');
const postsRouter = require('./routers/posts');
const commentsRouter = require('./routers/comments');
const likesRouter = require('./routers/likes');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const Likes = require('./models').like;
const Comments = require('./models').comment;
const Followers = require('./models').follower;

//view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/posts', postsRouter);

app.use('/comments', commentsRouter);

app.use('/likes', likesRouter);

app.post('/mail', (req, res) => {
    const { email, text } = req.body;
    if (!email || !text) {
        res.status(404).send('missing paramaters');
    }
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secureConnection: false, // true for 465, false for other ports
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'myrin.w@outlook.com', // generated ethereal user
            pass: 'Breakdance123', // generated ethereal password
        },
    });
    let mailOptions = {
        from: '<myrin.w@outlook.com>', // sender address (who sends)
        to: `${email}`, // list of receivers (who receives)
        subject: 'Tastebook', // Subject line
        text: 'Hello world ', // plaintext body
        html: `${text}` // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
            res.status(400).send("email failed");
        } else {
            res.send('email sent!');
        }

        console.log('Message sent: ' + info.response);
    });
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})