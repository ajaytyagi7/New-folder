const {Schema,model, Types} = require('../connection');

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
    education:String,
    company: { type : Types.ObjectId, ref: 'company'},
    createdAt: Date

});

module.exports=model('job',mySchema)