const {Schema,model} = require('../connection');

const mySchema=new Schema({
    title:String,
    name:String,
    description:String,
    salary:String,
    address:String,
    experience:String,
    jobtype:String,
    benefits:String,
    skill:String,
    education:String

});

module.exports=model('job',mySchema)