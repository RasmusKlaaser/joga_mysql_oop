// application packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const articleRoutes = require('./routes/articles')
app.use('/article', articleRoutes)

const authorRoutes = require('./routes/authors')
app.use('/author', authorRoutes)

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

// const express = require('express');
// const app = express();
// 
// const path = require('path');
// 
// const hbs = require('express-handlebars');
// 
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.engine('hbs', hbs.engine({
//     extname: 'hbs',
//     defaultLayout: 'main',
//     layoutsDir: __dirname + '/views/layouts/'
// }))
// 
// app.use(express.static('public'));
// 
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// 
// const articleRoutes = require('./routes/article');
// 
// app.use('/', articleRoutes)
// app.use('/article', articleRoutes)
// app.use('/author', articleRoutes)