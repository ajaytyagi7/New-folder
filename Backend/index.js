const express = require('express');

const UserRouter = require('./Router/userRouter');
const CompanyRouter = require('./Router/companyRouter');
const JobPostRouter = require('./Router/jobPostRouter');
const EmployeApplyRouter = require('./Router/EmployeApplyRouter');
const ContactRouter = require('./Router/contactRouter');


const cors = require('cors');


const app=express();
const port= 4000;

app.use(express.json());
app.use(cors({
    orgin: 'http://localhost:5173'

}));

app.use('/user',UserRouter);
app.use('/company',CompanyRouter);
app.use('/job',JobPostRouter);
app.use('/apply',EmployeApplyRouter);
app.use('/contact',ContactRouter);




app.listen(port,() =>{console.log('Server Started !!')});