const fs = require('fs');

const emp0 = {
    name: "Jason",
        //no pun intended.
    lastName: "Smith",
    age: 24,
    employeeID: 35289579832,
    hourlyIncome: "£15.62",
    jobRole: "Junior Developer"
}
const emp1 = {
    name: "Sophie",
    lastName: "Clark",
    age: 29,
    employeeID: 3242325234992,
    hourlyIncome: "£11.60",
    jobRole: "Apprentice"
}

fs.writeFileSync(
    'output.txt',
    JSON.stringify(emp1, null, 3),
    JSON.stringify(emp0, null, 3),
    'utf-8',
    'utf-8',

)