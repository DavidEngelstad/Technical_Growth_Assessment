const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.listen(3000, function() {
    console.log('Listening on port 3000');
});
