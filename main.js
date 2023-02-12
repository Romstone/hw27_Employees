const employees = new Employees();
const company = new Company(employees);
const random = new Random();
const generator = new EmployeeGenerator(random);
const hiredList = new List('.hired');
const firedList = new List('.fired');
const empId = document.getElementById('fire_input');

document.getElementById('generate').addEventListener('click', () => {
    let employee;
    while (Object.keys(employees.data).length !== 20) {
        try {
            employee = generator.getRandomEmployee(random);
            company.hire(employee);
            hiredList.addItem(`
                id: ${employee.id} || 
                gender: ${employee.gender} || 
                name: ${employee.name} || 
                email: ${employee.email} || 
                salary: ${employee.salary}
            `);

        } catch (e) {
            console.log(e.message);
        }
    }
    if (Object.keys(employees.data).length === 20)
        alert('Company is full!')
});

document.getElementById('fire_submit').addEventListener('click', () => {
    try {
        if (employees.get(empId.value)) {
            let employee = employees.get(empId.value);
            company.fire(empId.value);
            firedList.addItem(`
                id: ${employee.id} || 
                gender: ${employee.gender} || 
                name: ${employee.name} || 
                email: ${employee.email} || 
                salary: ${employee.salary} ||
                fired: true
            `);
        }
    } catch (e) {
        console.log(e.message);
    }
});

document.getElementById('budget').addEventListener('click', () => {
    alert(company.computeBudget());
});


