class EmployeeGenerator {
    constructor(random) {
        this.random = random;
    }

    getRandomEmployee = () => {
        return {
            id: this.random.getRandomNumber(1, 100),
            email: 'randomemail'+this.random.getRandomNumber(1, 100)+'@gmail.com',
            gender: this.random.getRandomElement(['Male', 'Female']),
            name: 'RandomWorker'+this.random.getRandomNumber(1, 100),
            salary: this.random.getRandomNumber(10000, 50000),
            title: this.random.getRandomElement(['Wage Employee', 'Manager', 'Sales Person', 'Sales Manager'])
        }
    }
}