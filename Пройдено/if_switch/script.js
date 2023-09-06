let number = document.querySelector('#number');
let numBut = document.querySelector('#numBut');
let numRes = document.querySelector('#numRes');

numBut.onclick = ()=> {
    if (+number.value < 0){
        numRes.innerHTML = 'отрицательное'
    }
    else if (+number.value > 0){
        numRes.innerHTML = 'положительное'
    }
    else if (+number.value == 0){
        numRes.innerHTML = 'ноль'
    }
    else{
        numRes.innerHTML = 'это не число!!!'
    }

}




let year = document.querySelector('#year');
let yearBut = document.querySelector('#yearBut');
let yearRes = document.querySelector('#yearRes');

yearBut.onclick = ()=> {
    if(+year.value < 0 || +year.value >= 121){
        yearRes.innerHTML = 'Возраст введен некорректно'
    }
    else if (+year.value >= 0 && +year.value <= 120) {
        yearRes.innerHTML = 'Возраст введен корректно'
    }
    else{
        yearRes.innerHTML = 'Это не возраст'
    }
}



let num = document.querySelector('#num');
let nBut = document.querySelector('#nBut');
let nRes = document.querySelector('#nRes');

nBut.onclick = ()=> {
    if(+num.value < 0 ){
        nRes.innerHTML = +num.value * -1
    }
    else if (+num.value >= 0) {
        nRes.innerHTML = +num.value
    }
    else{
        nRes.innerHTML = 'Это не число'
    }
}


let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let timeBut = document.querySelector('#timeBut');
let timeRes = document.querySelector('#timeRes');

timeBut.onclick = ()=> {
    if((+hour.value >= 0 && +hour.value <= 24) && (+minute.value >= 0 && +minute.value <= 60) && (+second.value >= 0 && +second.value <= 60)){
        timeRes.innerHTML = +hour.value + ":" + +minute.value + ":" + +second.value
    }
    else {
        timeRes.innerHTML = "Время введено неверно!!!"
    }
}



let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let symbol = document.querySelector('#symbol');
let resBut = document.querySelector('#resBut');
let calcRes = document.querySelector('#calcRes');
resBut.onclick = ()=> {
    switch(symbol.value){
        case '*':
            calcRes.innerHTML = +num1.value * +num2.value;
            break;
        case '/':
            calcRes.innerHTML = +num1.value / +num2.value;
            break;
        case '+':
            calcRes.innerHTML = +num1.value + +num2.value;
            break;
        case '-':
            calcRes.innerHTML = +num1.value - +num2.value;
            break;
        default:
            calcRes.innerHTML = "ошибка";
            break;
    }
}


let name1 = document.querySelector('#name');
let nameBut = document.querySelector('#nameBut');
let nameRes = document.querySelector('#nameRes');

nameBut.onclick = ()=> {
    switch(name1.value){
        case 'Земля':
            nameRes.innerHTML = "Привет, землянин!";
            break;
        case 'земля':
            nameRes.innerHTML = "Привет, землянин!";
            break;
        default:
            nameRes.innerHTML = "Привет, инопланетянин!";
            break;
    }
}