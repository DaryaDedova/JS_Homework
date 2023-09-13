let numbFirst = document.querySelector('.numbFirst');
let numbSecond = document.querySelector('.numbSecond');
let butNumb = document.querySelector('.butNumb');
let resNumb = document.querySelector('.resNumb');

function one(){
    if(+numbFirst.value < +numbSecond.value){
        resNumb.innerHTML = "-1"
    }
    else if (+numbFirst.value > +numbSecond.value){
        resNumb.innerHTML = "1"        
    }
    else if (+numbFirst.value == +numbSecond.value){
        resNumb.innerHTML = "0"              
    }
    else{
        resNumb.innerHTML = "Вы ввели не число" 
    }
}

butNumb.onclick = ()=> {
    one();
}


let numbFir = document.querySelector('.numbFir');
let numbSec = document.querySelector('.numbSec');
let numbThird = document.querySelector('.numbThird');
let butNum = document.querySelector('.butNum');
let resNum = document.querySelector('.resNum');
let butUpd = document.querySelector('.butUpd');

function two(){
    let a = "";
    for (let i = 0; i < 1; i++){
        a += numbFir.value;
        a += numbSec.value;
        a += numbThird.value;
    }
    resNum.innerHTML = a;
}

butNum.onclick = ()=> {
    two();
}
butUpd.onclick = ()=> {
    a = "";
    resNum.innerHTML = a;
}


let number = document.querySelector('.number');
let butNumber = document.querySelector('.butNumber');
let resNumber = document.querySelector('.resNumber');

function three(){
    for (let i = 0; i < +number.value; i++){
        let a = 1;
        let b = 0;
        while(a < +number.value){
            if(+number.value % a == 0){
                b = b + a;
            }            
            a++
        }
        resNumber.innerHTML = b
    }
}

butNumber.onclick = ()=> {
    three();
}


let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let butTime = document.querySelector('.butTime');
let resTime = document.querySelector('.resTime');

function four(){
    if (minute.value == 0){
        minute.value = "00";
    }
    if(second.value == 0){        
        second.value = "00"
    }
    resTime.innerHTML = hour.value + ":" + minute.value + ":" + second.value
}

butTime.onclick = ()=> {
    four();
}



let seconds = document.querySelector('.seconds');
let butTimes = document.querySelector('.butTimes');
let resTimes = document.querySelector('.resTimes');

function five(){
    let a = 0; //минуты
    let b = 0; //часы
        if (seconds.value > 60){
            a = Math.floor(seconds.value / 60);
            seconds.value = seconds.value - a * 60;
        }
        if(a >= 60){
            b = Math.floor(a / 60)
            a = a - b * 60;
        }
    
    resTimes.innerHTML = b + ":" + a + ":" + seconds.value;
}


butTimes.onclick = ()=> {
    five();
}