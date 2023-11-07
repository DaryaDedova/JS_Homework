class Car{
    constructor(brand, color, volume, normPetrol) {
        this.brand = brand;
        this.color = color;
        this.volume = +volume;
        this.normPetrol = +normPetrol;
    }

    distance(){
        document.querySelector('.one').innerHTML = 'Pасстояние, которое проедет ' + this.color + ' автомобиль ' + this.brand + ', израсходовав полный бак бензина равно ' + this.volume * this.normPetrol + ' км'
    }
}

class Truck extends Car{
    constructor(brand, color, volume, normPetrol, liftingCapacity){
        super(brand, color, volume, normPetrol, normPetrol);
        this.liftingCapacity = +liftingCapacity;
        this.litr = +litr;
    }

    transportation(){
        document.querySelector('.two').innerHTML = 'Себестоимость транспортировки одной тонны груза на один километр ' + this.normPetrol / 100 * this.litr / this.liftingCapacity
    }
}

litr = +prompt('Введите цену за литр');

const carOne = new Car('Мерседес', 'красный', 60, 9);
const carTwo = new Truck('', '', 1, 15, 2);


carOne.distance();
carTwo.transportation();




class Parallelepiped{
    constructor(a, b, c){
        this.a = +a;
        this.b = +b;
        this.c = +c;
    }

    volume(){
        return this.a * this.b * this.c
    }
}

class NewParallelepiped extends Parallelepiped{
    constructor(a, b, c, mass){
        super(a, b, c)
        this.mass = +mass;
    }


    density(){
        return this.mass / (this.a * this.b * this.c);
    }
}


let Parall = new Parallelepiped(3, 4, 6);
document.querySelector('.three').innerHTML = '<br>' + 'объем параллелепипеда равен ' + Parall.volume();

let parallTwo = new NewParallelepiped(3, 4, 6, 144);
document.querySelector('.four').innerHTML = '<br>' + 'плотность материала ' + parallTwo.density();