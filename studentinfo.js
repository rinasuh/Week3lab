const dateofbirth = "27/12/2005"
const getstudentname = () =>{
    return "Rina"
}
const getcampusname = () =>{
    return ("UEL Campus")
}
exports.getname = getstudentname
exports.location = getcampusname
exports.dob = dateofbirth
exports.studentgrade = (marks) =>{
    if (marks>50 && marks<70)
        return ("B grade")
    else
        return ("A grade")
}