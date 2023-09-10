let simb = document.querySelector('.simb');
let butSimb = document.querySelector('.butSimb');
let resSimb = document.querySelector('.resSimb');

let a = ""
butSimb.onclick = ()=> {
    for (let i = 0; i < +simb.value; i++){
        a += "#";
        a += " ";
    }
    resSimb.innerHTML = a;
}


let numb = document.querySelector('.numb');
let butNumb = document.querySelector('.butNumb');
let resNumb = document.querySelector('.resNumb');

let b = "";
butNumb.onclick = ()=> {
    let c = 0;
    for (let i = -1; i < +numb.value; i++){
        b += +numb.value - c;
        b += " "
        c++
    }
    resNumb.innerHTML = b;
    console.log(b)

}

// let b = "";
// butNumb.onclick = ()=> {
//     let c = +numb.value;
//     for (let i = -1; i < +numb.value; i++){
//         b += +numb.value -c;
//         c++
//     }
//     resNumb.innerHTML = b;
//     console.log(b)

// }


let task = document.querySelector('.task');
let butTask = document.querySelector('.butTask');
let resTask = document.querySelector('.resTask');

butTask.onclick = ()=> {
    if(+task.value == 6){
        resTask.innerHTML = "Супер! Вы решили этот пример)"
    }
    else{
        resTask.innerHTML = "Ошибочка... Попробуйте снова"        
    }
}




let firstNum = document.querySelector('.firstNum');
let secondNum = document.querySelector('.secondNum');
let butNum = document.querySelector('.butNum');
let resNum = document.querySelector('.resNum');

butNum.onclick = ()=> {
    let a = ""
    let b = +firstNum.value + 4;
    for(let i = +firstNum.value; i < +secondNum.value - 3; i = i + 4){
        a += b;
        a += " ";
        b = b + 4;
    }
    resNum.innerHTML = a;
}