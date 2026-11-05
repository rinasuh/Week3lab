function studentinfo(name, studentid, labgroupnum) {
    console.log("My name is " + name);
    console.log("My ID is " + studentid);
    console.log("My lab group number is " + labgroupnum);
}

var studentname = "Rina";
var studentid = "4040188";
var labgroupnum = "Group 5";

const currentDateTime = new Date();
console.log("program run on : " + currentDateTime.toLocaleString());

studentinfo(studentname, studentid, labgroupnum);
const studentfavlang = (favlang, name)=>{
    console.log(name + "'s favourite programming language is " + favlang);
}

function calculate(studentid){
    const lastfour = String(studentid).slice(-4);
    let sum = 0;
    for(let i=0; i < lastfour.length; i++){
        sum += Number(lastfour[i]);
    }
    return sum;
}

console.log("The sum of the last four digits of student ID is: " + calculate(studentid));