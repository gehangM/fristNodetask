import express from 'express';

const app =express();

const students =[
    {
        id : 1,
        name :  "Gehan",
        city : "mansoura",
    },
    {
        id : 2,
        name : "Gamal",
        city : "mansoura",
    },
    {
        id : 3,
        name : "Ali",
        city : "mansoura",
    },
    {
        id : 4,
        name : "Mohamed",
        city : "mansoura",
    },
];
const studentsFunction = (request,response)=>{
let output ='<ul>';
for(let i=0;i<students.length;i++){
const student =students[i];
output +="<li>"+student.name+"</li>";

}

output +='</ul>'
    response.send(output);
};
app.get('/students',studentsFunction)

app.listen(5000);




