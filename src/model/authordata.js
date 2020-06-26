// //Accessing mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:27017/library' );

//Schema definition
const schema = mongoose.Schema;
const authorSchema = new schema({
    name:String,
    image:String,
    genre:String,
    desc:String
})

//Model creation
var authorData = mongoose.model('authorData',authorSchema);

module.exports = authorData;