const express = require('express');
require('dotenv').config({ path: '../.env' });
const homeRouter = require('./src/routes/home.js');
const cors = require('cors');

var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
const session = require('express-session');
const dbConfig = require('./src/database.js');
const pgSession = require('connect-pg-simple')(session);

const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log(`Start Server : ${process.env.PORT}`);
});

let sess = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}

// if(process.env.NODE_ENV == 'production'){
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true
// }

app.set ('views', __dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(session(sess, {
    store: new pgSession({
        pool : dbConfig,
        tableName : 'user_sessions',
        createTableIfMissing : true
    })
}))

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use("/", homeRouter);