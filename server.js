const express = require('express');
const app = express();
const route = require('./route/Route');
const dashroute = require('./route/dashboardRoute');

app.use('/', route);
app.set('view engine', 'ejs');
app.use('/dashboard', dashroute);
app.use('/', route);


app.use(express.static('public'));

app.listen(3000, () => {
    console.log("server started at port number 3000")
})
