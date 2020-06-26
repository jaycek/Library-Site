//Accessing mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;
const bookSchema = new schema({
    title:String,
    author:String,
    genre:String,
    image:String
})

//Model creation
var bookData = mongoose.model('bookData',bookSchema);

module.exports = bookData;