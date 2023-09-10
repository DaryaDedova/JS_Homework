let firstNumber = document.querySelector('.firstNumber');
let secondNumber = document.querySelector('.secondNumber');
let resBut = document.querySelector('.resBut');
let res = document.querySelector('.res');

resBut.onclick = ()=> {
    let a = +firstNumber.value;
    let b = +secondNumber.value;
    let c = 0;
    while (a <= b){
        c = c + a;
        a++;
    }
    res.innerHTML = c
}


let inp = document.querySelectorAll('.inp');
let opredBut = document.querySelector('.opredBut');
let posit = document.querySelector('.posit');
let negat = document.querySelector('.negat');
let zero = document.querySelector('.zero');
let honest = document.querySelector('.honest');
let odd = document.querySelector('.odd');

opredBut.onclick = ()=> {
    let a = 0;
    for(i = 0; i < inp.length; i++){
        if (inp[i].value % 2 == 0){
            a++
        }
    }
    honest.innerHTML += a;

    let b = 0;
    for(i = 0; i < inp.length; i++){
        if (inp[i].value % 2 !== 0){
            b++
        }
    }
    odd.innerHTML += b;

    let c = 0;
    for(i = 0; i < inp.length; i++){
        if (inp[i].value < 0){
            c++
        }
    }
    negat.innerHTML += c;

    let d = 0;
    for(i = 0; i < inp.length; i++){
        if (inp[i].value > 0){
            d++
        }
    }
    posit.innerHTML += d;

    let f = 0;
    for(i = 0; i < inp.length; i++){
        if (inp[i].value == 0){
            f++
        }
    }
    zero.innerHTML += f;
}

let numbInp = document.querySelector('.numbInp');
let numbBut = document.querySelector('.numbBut');
let numbRes = document.querySelector('.numbRes');


numbBut.onclick = ()=>{
    let a = 1;
    let str = '';
    for (i = 0; i < 100; i++){
        while (a < 100){
            if (a % +numbInp.value == 0){
                str += a;
                str += '<br>'
            }            
            a++
            // console.log(str)
        }
    }
    numbRes.innerHTML += str;
}


let numInpOne = document.querySelector('.numInpOne');
let numButOne = document.querySelector('.numButOne');
let numResOne = document.querySelector('.numResOne');

numButOne.onclick = ()=> {
    for(let i = 2; i < +numInpOne.value; i++){
        let a = 2;
        let b = 0;
        while (a < +numInpOne.value){
            if(+numInpOne.value % a == 0){
                b++;
                console.log(a)
            }
            a++
        }
        if(b > 0){
            numResOne.innerHTML = 'составное число'
        }
        else{
            numResOne.innerHTML = 'простое число'
        }
    }
}