const axios = require('axios');

axios
    .get(`https://swapi.co/api/${process.argv[2]}`)
    .then(res => console.log(res.data.count))
    .catch(err => console.log(`\nThe "${process.argv[2]}" endpoint does not exist or not responding!\n`))