// Задача 10


let d = document.querySelector('#day');
let m = document.querySelector('#month');
let y = document.querySelector('#year');
let resBut = document.querySelector('#resBut');
let result = document.querySelector('#result');

resBut.onclick = ()=>{

if ((+y.value % 4 == 0 || +y.value % 400 == 0) && (+y.value % 100 != 0)){
    //високосный год
    if (+m.value == 2) {
        // февраль
        if (+d.value >= 1 && +d.value <= 28){
            result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
        }
        if (+d.value == 29){
            result.innerHTML = +d.value - 28 + '.' + (+m.value + 1) + '.' + +y.value;
        }
    }
    if (+m.value == 1 || +m.value == 3 || +m.value == 5 || +m.value == 7 || +m.value == 8 || +m.value == 10 || +m.value == 12) {
        // где 31 день
        if (+m.value >= 1 && +m.value <= 11) {
            if (+d.value >= 1 && +d.value <= 30){
                result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
            }
            if (+d.value == 31){
                result.innerHTML = +d.value - 30 + '.' + (+m.value + 1) + '.' + +y.value;
            }
        }
        if (+m.value == 12){
            // декабрь
            if (+d.value >= 1 && +d.value <= 30) {
                result.innerHTML = +d.value + 1 + "." + +m.value + "." + +y.value;
            }
            if (+d.value == 31) {
                result.innerHTML = +d.value - 30 + "." + (+m.value -11) +"." + (+y.value + 1);
            }
        }
        
    }
    if (+m.value == 4 || +m.value == 6 || +m.value == 9 || +m.value == 11) {
        // где 30 дней
        if (+d.value >= 1 && +d.value <= 29){
            result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
        }
        if (+d.value == 30){
            result.innerHTML = +d.value - 29 + '.' + (+m.value + 1) + '.' + +y.value;
        }
    }
}
else {
    // не високосный год

    if (+m.value == 2) {
        // февраль
        if (+d.value >= 1 && +d.value <= 27){
            result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
        }
        if (+d.value == 28){
            result.innerHTML = +d.value - 27 + '.' + (+m.value + 1) + '.' + +y.value;
        }
    }

    if (+m.value == 1 || +m.value == 3 || +m.value == 5 || +m.value == 7 || +m.value == 8 || +m.value == 10 || +m.value == 12) {
        // где 31 день
        if (+m.value >= 1 && +m.value <= 11) {
            if (+d.value >= 1 && +d.value <= 30){
                result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
            }
            if (+d.value == 31){
                result.innerHTML = +d.value - 30 + '.' + (+m.value + 1) + '.' + +y.value;
            }
        }
        if (+m.value == 12){
            // декабрь
            if (+d.value >= 1 && +d.value <= 30) {
                result.innerHTML = +d.value + 1 + "." + +m.value + "."+ +y.value;
            }
            if (+d.value == 31) {
                result.innerHTML = +d.value - 30 + "." + (+m.value - 11) + "." + (+y.value + 1);
            }
        }
        
    }
    if (+m.value == 4 || +m.value == 6 || +m.value == 9 || +m.value == 11) {
        // где 30 дней
        if (+d.value >= 1 && +d.value <= 29){
            result.innerHTML = +d.value + 1 + '.' + +m.value + '.' + +y.value;
        }
        if (+d.value == 30){
            result.innerHTML = +d.value - 29 + '.' + (+m.value + 1) + '.' + +y.value;
        }
    }
}
}












let inp_one = document.querySelector('.inp_one');
let inp_two = document.querySelector('.inp_two');
let inp_three = document.querySelector('.inp_three')
let but = document.querySelector('button');
let res = document.querySelector('.res');
but.onclick = () => {
    let one = +inp_one.value;
    let a = 0; //балл для 1 вопроса

    switch (one){
        case 1: 
            a += 0;
            break;
        case 2: 
            a += 2;
            break; 
        case 3: 
            a += 0;
            break;
        case 4: 
            a += 0;
            break;
        default:
            console.log('нет')
    }


    
    let two = +inp_two.value;
    let b = 0; //балл для 2 вопроса
    switch (two){
        case 1: 
            b += 0;
            break;
        case 2: 
            b += 0;
            break; 
        case 3: 
            b += 2;
            break;
        case 4: 
            a += 0;
            break;
        default:
            console.log('нет')
    }

    let three = +inp_three.value;
    let c = 0; //балл для 2 вопроса
    switch (three){
        case 1: 
            c += 0;
            break;
        case 2: 
            c += 0;
            break; 
        case 3: 
            c += 0;
            break;
        case 4: 
            c += 2;
            break;
        default:
            console.log('нет')
    }

    res.innerHTML = a + b + c;
}