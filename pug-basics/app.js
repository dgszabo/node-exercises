const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (rec, res, next) => {

});

app.listen(port, function() {
    console.log(`server running on ${}`)
});