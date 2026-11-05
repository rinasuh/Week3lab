function EmployeeInfo(name, salary){
    console.log("welcome " + name + " your monthly salary is " + salary);
}

const currentDateTime = new Date();
console.log("this is my first program");
console.log("program run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

//second exercise
const Empskills = (skills, name, labgrp)=>{
    console.log("student ID " + name + " expert in " + skills);
    console.log("lab group name " + labgrp);
}
Empskills("java","4040188","group 11")

//third exercise
const student= require('./StudentInfo')  
const person = require('./Person')  

console.log("Student Name:" +student.getname())   
console.log(student.location())  
console.log(student.dob)  
 
console.log(student.studentgrade())  
console.log("grade is "+student.studentgrade(55) ) 
person1= new person("Jim","USA","myemail@gmail.com")  
console.log("using Person Module",person1.getpersoninfo()) 
console.log("Programe ended") 

//exercise 4
os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 
