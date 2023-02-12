class Company {
    constructor(employees) {
        this.employees = employees;
    }

    hire = (employee) => {
        return this.employees.add(employee);
    }

    fire = (id) => {
        return this.employees.remove(id);
    }

    computeBudget = () => {
        let salary = 0;
        this.employees.getAll().forEach(emp => {
            salary += emp.salary;
        });
        return salary;
    }

    processEmployees = (func) => {
        this.employees.getAll().forEach(emp => {
            func(emp);
        });
    }
}