const express = require('express');
const app = express();

app.get('/phrase', function(req, res, next) {
    req.phrase = 'I';
    return next();
});

app.get('/phrase', function(req, res, next) {
    req.phrase += ' <3';
    return next();
});

app.get('/phrase', function(req, res, next) {
    req.phrase += ' JavaScript';
    return next();
});

app.get('/phrase', function(req, res, next) {
    return res.send(req.phrase);
});

app.use((error, request, response, next) => {
    return response.status(404).send(error);
});

app.listen(3000, function() {
    console.log('app is listening at 3000');
});