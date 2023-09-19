let card = document.querySelector('.card');
let col = document.querySelector('.col');
let but_col = document.querySelector('.but_col');

but_col.onclick = ()=> {
    card.style.backgroundColor = col.value;
    info();
}


let numCard = document.querySelector('.numCard');
let nameCard = document.querySelector('.nameCard');
let dateCard = document.querySelector('.dateCard');

let cardNumber = document.querySelector('.cardNumber');
let cardName = document.querySelector('.cardName');
let dayCard = document.querySelector('.dayCard');
let yearCard = document.querySelector('.yearCard');
let pinCard = document.querySelector('.pinCard');

function info(){
    numCard.innerHTML = cardNumber.value
    nameCard.innerHTML = cardName.value
    dateCard.innerHTML = dayCard.value + '.' + yearCard.value
}