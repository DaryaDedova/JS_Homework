let age = document.querySelector('#age');
let ageBut = document.querySelector('#ageBut');
let ageResult = document.querySelector('#ageResult');

ageBut.onclick = () => {
    if (+age.value < 0){
        ageResult.innerHTML = 'Вы еще не родились'
    }
    else if (0 <= +age.value && +age.value <= 2){
        ageResult.innerHTML = 'малыш'
    }
    else if (3 <= +age.value && +age.value <= 11){
        ageResult.innerHTML = 'ребенок'
    }
    else if (12 <= +age.value && +age.value <= 18){
        ageResult.innerHTML = 'подросток'
    }
    else if (19 <= +age.value && +age.value <= 60){
        ageResult.innerHTML = 'взрослый'
    }
    else if (61 <= +age.value && +age.value <= 130){
        ageResult.innerHTML = 'пенсионер'
    }
    else{
        ageResult.innerHTML = 'Такого возраста нет'
    }
}


let number = document.querySelector('#number');
let numberBut = document.querySelector('#numberBut');
let numResult = document.querySelector('#numResult');
numberBut.onclick = () => {
    if (+number.value == 0){
        numResult.innerHTML = ")"
    }
    else if (+number.value == 1){
        numResult.innerHTML = "!"
    }
    else if (+number.value == 2){
        numResult.innerHTML = "@"
    }
    else if (+number.value == 3){
        numResult.innerHTML = "#"
    }
    else if (+number.value == 4){
        numResult.innerHTML = "$"
    }
    else if (+number.value == 5){
        numResult.innerHTML = "%"
    }
    else if (+number.value == 6){
        numResult.innerHTML = "^"
    }
    else if (+number.value == 7){
        numResult.innerHTML = "&"
    }
    else if (+number.value == 8){
        numResult.innerHTML = "*"
    }
    else if (+number.value == 9){
        numResult.innerHTML = "("
    }
    else {
        numResult.innerHTML = "Тут нет символа"
    }
}


let year = document.querySelector('#year');
let yearBut = document.querySelector('#yearBut');
let yearResult = document.querySelector('#yearResult');
yearBut.onclick = () => {
    if (((+year.value % 4 == 0) && (+year.value % 100 != 0)) || (+year.value % 400 == 0)) {
        yearResult.innerHTML = 'високосный'
    }
    else {
        yearResult.innerHTML = 'не високосный'
    }
}


let sum = document.querySelector('#sum');
let sumBut = document.querySelector('#sumBut');
let sumResult = document.querySelector('#sumResult');

sumBut.onclick = () => {
    if (+sum.value >= 200 && +sum.value < 300){
        sumResult.innerHTML = +sum.value * 0.97;
    }
    else if (+sum.value >= 300 && +sum.value < 500){
        sumResult.innerHTML = +sum.value * 0.95
    }
    else if (+sum.value >= 500){
        sumResult.innerHTML = +sum.value * 0.93;
    }
    else{
        sumResult.innerHTML = +sum.value;
    }
}