const {Schema,model} = require('../connection');

const mySchema=new Schema({
    email:String,
    name:String,
    password:String
});

module.exports=model('company',mySchema)