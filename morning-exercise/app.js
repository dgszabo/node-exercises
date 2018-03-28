const axios = require('axios');

axios
    .get("http://numbersapi.com/42")
    .then(fact => console.log(fact.text))
    .catch(err => console.log(err));