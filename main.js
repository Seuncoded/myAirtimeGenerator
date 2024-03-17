let cards = document.getElementById('airtimeDisplayScreen');
let newCard = Math.floor(Math.random() * 10000000000000000)
console.log(newCard);

function pinGenerate() {
    cards.innerHTML = Math.floor(Math.random(newCard) * 100000000000000);
}



let cardEnter = document.getElementById('loadCard')
let cardType = ['mtn', 'glo', 'airtel', '9mobile']

let cardNetwork = [0]


function loadAirtime() {

    if (cardEnter.value == cards.innerHTML){
        alert('Recharge Was Successful')
    } else {
        alert('Try gain')
    }

}