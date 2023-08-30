// Задача 10


let d = +prompt('введите день');
let m = +prompt('введите месяц');
let y = +prompt('введите год');

if ((y % 4 == 0 || y % 400 == 0) && (y % 100 != 0)){
    if (m == 2) {
        if (d >= 1 && d <= 28){
            console.log (d + 1, m, y)
        }
        if (d == 29){
            console.log (d - 28, m + 1, y)
        }
    }
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        if (m >= 1 && m <= 11) {
            if (d >= 1 && d <= 31){
                console.log (d + 1, m, y)
            }
            if (d == 31){
                console.log (d - 30, m + 1, y)
            }
        }
        if (m == 12){
            if (d >= 1 && d <= 30) {
                console.log (d + 1, m, y)
            }
            if (d == 31) {
                console.log (d - 30, m -11, y + 1)
            }
        }
        
    }
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (d >= 1 && d <= 29){
            console.log (d + 1, m, y)
        }
        if (d == 30){
            console.log (d - 29, m + 1, y)
        }
    }
}
else {

}



let inp_one = document.querySelector('.inp_one');
let inp_two = document.querySelector('.inp_two');
let but = document.querySelector('button');
but.onclick = () => {
    let one = +inp_one.value;
    let a = 0; //балл для 1 вопроса

    switch (one){
        case 1: 
            a += 2;
            break;
        case 2: 
            a += 0;
            break; 
        case 3: 
            a += 0;
            break;
        default:
            console.log('нет')
    }


    
    let two = +inp_two.value;
    let b = 0; //балл для 1 вопроса
    switch (two){
        case 1: 
            b += 2;
            break;
        case 2: 
            b += 0;
            break; 
        case 3: 
            b += 0;
            break;
        default:
            console.log('нет')
    }
}