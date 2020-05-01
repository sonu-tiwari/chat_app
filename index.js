const express = require('express');
const router  = require('./routers/root.router');
const db = require('./config/mongo.config');
const ejsLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout, extractScripts', true);
app.use(express.static('./public/'));
app.use(ejsLayout);
app.use('/', router);
app.listen(PORT, (err)=>{
    if (err) console.log('Error in starting app---->', err);
    else console.log('App is running at ------>>>>>', PORT);
})