let one1 = prompt('Введите название продукта');
let one2 = +prompt('Введите его количество');
let firTwo = +prompt('Введите цену');
let one3 = prompt('Этот продукт куплен? (куплен/не куплен)');
let two1 = prompt('Введите название продукта');
let two2 = +prompt('Введите его количество');
let secTwo = +prompt('Введите цену');
let two3 = prompt('Этот продукт куплен? (куплен/не куплен)');
let three1 = prompt('Введите название продукта');
let three2 = +prompt('Введите его количество');
let thiTwo = +prompt('Введите цену');
let three3 = prompt('Этот продукт куплен? (куплен/не куплен)');
let list = document.querySelector('.list');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');


let shoppingList = [
    {product: one1, quantity: one2, status: one3, },
    {product: two1, quantity: two2, status: two3,},
    {product: three1, quantity: three2, status: three3,},
];

list.onclick = ()=>{
    let a = ''
    let b = ''
    let c = ''
    for(let i = 0; i < shoppingList.length; i++){
        if(shoppingList[i].status == 'не куплен' || shoppingList[i].status == 'Не куплен'){
            shoppingList[i].status = 'куплен'
        }
        if(shoppingList[i+1].status == 'не куплен' || shoppingList[i+1].status == 'Не куплен'){
            shoppingList[i+1].status = 'куплен'
        }
        if(shoppingList[i+2].status == 'не куплен' || shoppingList[i+2].status == 'Не куплен'){
            shoppingList[i+2].status = 'куплен'
        }
        a = '1.' + ' ' + shoppingList[i].product + ', ' + 'количество: ' + ' ' + shoppingList[i].quantity + ', ' + shoppingList[i].status + '<br>';

        b = '2.' + ' ' + shoppingList[i+1].product + ', ' + 'количество: ' + ' ' + shoppingList[i+1].quantity + ', ' + shoppingList[i+1].status + '<br>';

        c = '3.' + ' ' + shoppingList[i+2].product + ', ' + 'количество: ' + ' ' + shoppingList[i+2].quantity + ', ' + shoppingList[i+2].status + '<br>';

        break;
    }
    one.innerHTML = a
    two.innerHTML = b
    three.innerHTML = c
}



let btnShop = document.querySelector('.btnShop');

let productOne = document.querySelector('.productOne');
let productTwo = document.querySelector('.productTwo');
let productThree = document.querySelector('.productThree');

let quanOne = document.querySelector('.quanOne');
let quanTwo = document.querySelector('.quanTwo');
let quanThree = document.querySelector('.quanThree');

let priceOne = document.querySelector('.priceOne');
let priceTwo = document.querySelector('.priceTwo');
let priceThree = document.querySelector('.priceThree');

let resOne = document.querySelector('.resOne');
let resTwo = document.querySelector('.resTwo');
let resThree = document.querySelector('.resThree');

let result = document.querySelector('.result');

let maxShop = document.querySelector('.maxShop');

let average = document.querySelector('.average');


let billShop = [
        {product: one1, quantity: one2, price: firTwo, },
        {product: two1, quantity: two2, price: secTwo,},
        {product: three1, quantity: three2, price: thiTwo,}
                                                            ];

function bill(){
    let a = '';
    let b = '';
    let c = '';

    let d = 0;
    let e = 0;
    let f = 0;

    let g = 0;
    let h = 0;
    let j = 0;

    let resuOne = 0;
    let resuTwo = 0;
    let resuThree = 0;

    let total = 0;

    let maxSh = '';

    let averagePr = 0;

    for(let i = 0; i < billShop.length; i++){
        a = billShop[i].product;
        b = billShop[i+1].product;
        c = billShop[i+2].product;

        d = billShop[i].quantity;
        e = billShop[i+1].quantity;
        f = billShop[i+2].quantity;

        g = billShop[i].price;
        h = billShop[i+1].price;
        j = billShop[i+2].price;

        resuOne = d * g;
        resuTwo = e * h;
        resuThree = f * j;
        total = d * g + e * h + f * j;
        averagePr = total / (d + e + f);

        if(resuOne > resuTwo && resuOne > resuThree){
            maxSh =  billShop[i].product + ' ' + 'на сумму' + ' ' + resuOne.toFixed(2) + 'руб.';
        }
        if(resuTwo > resuOne && resuTwo > resuThree){
            maxSh =  billShop[i+1].product + ' ' + 'на сумму' + ' ' + resuTwo.toFixed(2) + 'руб.';
        }
        if(resuThree > resuTwo && resuThree > resuOne){
            maxSh =  billShop[i+2].product + ' ' + 'на сумму' + ' ' + resuThree.toFixed(2) + 'руб.';
        }

        break;
    }
    
    

    productOne.innerHTML = a;
    productTwo.innerHTML = b;
    productThree.innerHTML = c;

    quanOne.innerHTML = d;
    quanTwo.innerHTML = e;
    quanThree.innerHTML = f;

    priceOne.innerHTML = g;
    priceTwo.innerHTML = h;
    priceThree.innerHTML = j;

    resOne.innerHTML = resuOne.toFixed(2);
    resTwo.innerHTML = resuTwo.toFixed(2);
    resThree.innerHTML = resuThree.toFixed(2);

    result.innerHTML = total.toFixed(2);
    
    maxShop.innerHTML = maxSh;

    average.innerHTML = averagePr.toFixed(2);
    

}

btnShop.onclick = ()=>{
    bill();
}


