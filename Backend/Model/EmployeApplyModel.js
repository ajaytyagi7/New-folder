const {Schema,model} = require('../connection');

const mySchema=new Schema({
    name:String,
    email:String,
    phone:Number,
    resume:String,
    DOB:Date
});

module.exports=model('apply',mySchema)