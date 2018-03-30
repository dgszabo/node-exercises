const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://localhost/mongoose_basics', {
        useMongoClient: true
    })
    .then(() => {
        console.log('mongo DB connected');
    })
    .catch(err => {
        console.log(err);
    });