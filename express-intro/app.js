const express = require('express');
const app = express();


app.get('/calculator/:op', function(request, response, next) {
    nums = Object.keys(request.query)[0].split(',')

    let res;

    if(request.params.op === 'add') res = nums.slice(1).reduce((sum, el) => {
        return sum += +el;
    }, parseInt(nums[0]));
    if(request.params.op === 'subtract') res = nums.slice(1).reduce((sum, el) => {
        return sum -= +el;
    }, parseInt(nums[0]));
    if(request.params.op === 'multiply') res = nums.slice(1).reduce((sum, el) => {
        return sum *= +el;
    }, parseInt(nums[0]));
    if(request.params.op === 'divide') res = nums.slice(1).reduce((sum, el) => {
        return sum /= +el;
    }, parseInt(nums[0]));
    
    return response.send(res.toString());
});

app.get('/calculator/:op/:n1/:n2', function(request, response, next) {
    let n1 = +request.params.n1;
    let n2 = +request.params.n2;
    
    let res;

    if(request.params.op === 'add') res = n1 + n2;
    if(request.params.op === 'subtract') res = n1 - n2;
    if(request.params.op === 'multiply') res = n1 * n2;
    if(request.params.op === 'divide') res = n1 / n2;

    if(Number.isNaN(res)) {
        return response.status(400).send('invalid input');
    }

    return response.send(res.toString());
});

// you can also do this with an object + function:
// that is going to do the operation for you automatically both for the asic and the bonus exercise

// add?nums=1,2,3,4,5,6
// app.get('/:operation', (request, response, next) => {
//     const result = request.query.nums
//       .split(',')
//       .reduce((a, b) => solveMath(request.params.operation, +a, +b));
  
//     return response.send(`${result}`);
//   });

// app.get('/hello/:x', function(request, response, next) {
//     console.log(request.params.x);
// });

// app.get('/hello', function(request, response, next) {
//     console.log(request.query);
// });

app.listen(3000, function() {
    console.log('app is listening at 3000');
});