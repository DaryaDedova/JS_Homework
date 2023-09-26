// let x1 = document.querySelector('#x1');
// let y1 = document.querySelector('#y1');
// let x2 = document.querySelector('#x2');
// let y2 = document.querySelector('#y2');

let x1 = +prompt('Левая верхняя точка. Значение X1:');
let y1 = +prompt('Левая верхняя точка. Значение Y1:');
let x2 = +prompt('Правая нижняя точка. Значение X2:');
let y2 = +prompt('Правая нижняя точка. Значение Y2:');
let rec = '';

let rectangle = [
    {x: x1, y: y1},
    {x: x2, y: y2}
];

let one = document.querySelector('.one');
let oneBtn = document.querySelector('.oneBtn');

function rect(){
    for(let i = 0; i < rectangle.length; i++){
            rec += 'x' + (i + 1) + '=' + rectangle[i].x + " "
            rec += 'y' + (i + 1) + '=' + rectangle[i].y + '<br>'
            // console.log(rectangle[i])
        }
}

oneBtn.onclick = ()=> {
    rect()
    one.innerHTML = rec;
}


// задача 2
 

let two = document.querySelector('.two')
let twoBtn = document.querySelector('.twoBtn');
let a = '';


function twoo(){
    for(let i = 0; i < rectangle.length; i++){
        if(Math.abs(rectangle[i+1].x) - Math.abs(rectangle[i].x) <= 0){
          a = rectangle[i+1].x - rectangle[i].x
        }
        else{
            a = Math.abs(rectangle[i+1].x) - Math.abs(rectangle[i].x);
        }
        break        
    }
}

twoBtn.onclick = ()=> {
    twoo()
    two.innerHTML = Math.abs(a);
}



// задача 3


let three = document.querySelector('.three')
let threeBtn = document.querySelector('.threeBtn');
let threeSp = document.querySelector('.threeSp');
let threeSpn = document.querySelector('.threeSpn');

threeBtn.onclick = ()=> {
    let threePr = +prompt('Поменять ширину на:');
    let b= '';      
        rectangle[1].x = rectangle[1].x + threePr;
        for(let i = 0; i < rectangle.length; i++){
            b += 'x' + (i + 1) + '=' + rectangle[i].x + " "
            b += 'y' + (i + 1) + '=' + rectangle[i].y + '<br>'
            // console.log(rectangle)
            three.innerHTML = b;
        }   
    twoo()
    threeSpn.innerHTML = threePr;
    threeSp.innerHTML = a;
}




// задача 4


let four = document.querySelector('.four')
let fourBtn = document.querySelector('.fourBtn');
let fourSp = document.querySelector('.fourSp');
let fourSpn = document.querySelector('.fourSpn');
let c = '';

function fourNew(){
    for(let i = 0; i < rectangle.length; i++){
            c = rectangle[i].y - rectangle[i+1].y
          break
    }
}

fourBtn.onclick = ()=> {
    let fourPr = +prompt('Поменять высоту на:');
    let b= '';
    rectangle[0].y= rectangle[0].y + fourPr;
    for(let i = 0; i < rectangle.length; i++){
        b += 'x' + (i + 1) + '=' + rectangle[i].x + " "
        b += 'y' + (i + 1) + '=' + rectangle[i].y + '<br>'
        // console.log(rectangle)
    }    
    fourNew()
    four.innerHTML = b;
    fourSp.innerHTML = c;
    fourSpn.innerHTML = fourPr;
}


// задача 5

let fiveSpn = document.querySelector('.fiveSpn');
let fiveBtn = document.querySelector('.fiveBtn');
let five = document.querySelector('.five');

function fivee(){
    let t= '';
    let fivePr = +prompt('На сколько единиц сдвинуть прямоугольник');
    for(let i = 0; i < rectangle.length; i++){
        rectangle[i].x= rectangle[i].x + fivePr;
        t += 'x' + (i + 1) + '=' + rectangle[i].x + " "
        t += 'y' + (i + 1) + '=' + rectangle[i].y + '<br>'
        // console.log(rectangle)
    }
    five.innerHTML = t;
    fiveSpn.innerHTML = fivePr;
}
fiveBtn.onclick = ()=>{
    fivee();
}


// задача 6

let six = document.querySelector('.six');
let sixBtn = document.querySelector('.sixBtn');

sixBtn.onclick = ()=> {
    let xNew = +prompt('Введите координаты точи по X');
    let yNew = +prompt('Введите координаты точи по Y');

    for(let i = 0; i < rectangle.length; i++){
        if(xNew <= rectangle[i+1].x && xNew >= rectangle[i].x && yNew >= rectangle[i+1].y && yNew <= rectangle[i].y){
            six.innerHTML = 'Вы в пямоугольнике'
        }
        else{
            six.innerHTML = 'Вы НЕ в пямоугольнике'            
        }
        break;
    }

}
