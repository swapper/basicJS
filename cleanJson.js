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
fs.writeFileSync(
    'output.txt',
    JSON.stringify(emp1, null, 3),
    'utf-8',

)
