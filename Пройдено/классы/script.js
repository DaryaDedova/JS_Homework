class Worker {
    constructor (name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = +rate;
        this.days = +days;
    }

    getSalary(){
        document.write(this.rate * this.days)
    }
    getFullName(){
        document.write(this.name + ' ' + this.surname + ' ' + 'заработает: ');
    }
}

// console.log(Worker)


const workerOne = new Worker ('Bob', 'Jonas', 560, 7);
workerOne.getFullName();
workerOne.getSalary();



class Boss extends Worker{
    constructor(rate, days, workers){
        super(rate, days);
        this.workers = +workers;
    }
    show(){
        //НЕ ВИДИТ this.rate * this.days, ОДНАКО this.workers ОТОБРАЖАЕТСЯ
        document.write('<br>' + this.workers + ' сотрудников заработают: ' + (this.rate * this.days * this.workers));
    }
}


console.log()


const workersTwo = new Boss (230, 5, 7);
workersTwo.show();
// document.write('<br>' + this.workers + ' сотрудников заработают: ' + (this.rate * this.days * this.workers))