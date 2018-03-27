const fs = require('fs');

fs.readFile('./text.txt', (err, text) => {
    for(let i = 1; i <= 5; i++) {
        fs.writeFile(`./copy${i}.txt`, text, function(err) {
            if(err) {
                console.log('something went wrong: ', err)
            }
        });
    }
    console.log('finished!')
});

fs.readFile('./surprise.jpg', (err, text) => {
    for(let i = 1; i <= 5; i++) {
        fs.writeFile(`./copy${i}.jpg`, text, function(err) {
            if(err) {
                console.log('something went wrong: ', err)
            }
        });
    }
    console.log('finished!')
});

