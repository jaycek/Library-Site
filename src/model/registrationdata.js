// //Accessing mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;
const registrationSchema = new schema({
    name:String,
    pwd:String,
    mail:String,
    address1:String,
    address2:String,
    city:String,
    state:String,
    zip:String
})

//Model creation
var registrationData = mongoose.model('registrationData',registrationSchema);

module.exports = registrationData;