const fs = require('fs');

fs.readFile('./text.txt', (err, text) => {
    for(let i = 1; i <= 5; i++) {
        console.log(`file ${i} started copying`)
        fs.writeFile(`./copy${i}.txt`, text, function(err) {
            if(err) {
                console.log('something went wrong: ', err)
            }
        });
        console.log(`file ${i} finished copying`)
    }
    console.log('copying finished!')
});

// fs.readFile('./surprise.jpg', (err, text) => {
//     for(let i = 1; i <= 5; i++) {
//         fs.writeFile(`./copy${i}.jpg`, text, function(err) {
//             if(err) {
//                 console.log('something went wrong: ', err)
//             }
//         });
//     }
//     console.log('finished!')
// });

var inText = fs.createReadStream('./surprise.jpg');

for(let i = 1; i <= 5; i++) {
    let outText = fs.createWriteStream(`./copy${i}.jpg`)
    inText.pipe(outText);
}
