let a = prompt('Введите значение');
let b = prompt('Введите значение');
let c = prompt('Введите значение');
let d = prompt('Введите значение');
let e = prompt('Введите значение');
let f = prompt('Введите значение');
let g = prompt('Введите значение');
let h = prompt('Введите значение');
let i = prompt('Введите значение');
let j = prompt('Введите значение');

let arr = [a, b, c, d, e, f, g, h, i, j];

function one(){
    document.querySelector('.one').innerHTML = arr
}

function two(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            document.querySelector('.two').innerHTML += arr[i] + ' '
        }
    }
}

function three(){
    let aA = 0;
    let bB = 0;
    for(let i = 0; i < arr.length; i++){
        while(aA < arr[i]){
            aA++
        }
        bB = bB + aA;
        aA = 0
    }
    document.querySelector('.three').innerHTML = bB;
}


function four(){
    let aA = 0;
    let bB = 0;
    for(let i = 0; i < arr.length; i++){
        while(aA < arr[i]){
            aA++
            if(aA > bB){
                bB = aA;
            }
        }
        aA = 0
    }
    document.querySelector('.four').innerHTML = bB;
}




document.querySelector('.bt_one').onclick = ()=>{
    one()
}
document.querySelector('.bt_two').onclick = ()=>{
    two()
}
document.querySelector('.bt_three').onclick = ()=>{
    three()
}
document.querySelector('.bt_four').onclick = ()=>{
    four()
}