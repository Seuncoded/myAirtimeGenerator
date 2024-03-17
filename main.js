let cards = document.getElementById('airtimeDisplayScreen');
let newCard = Math.floor(Math.random() * 10000000000000000)
let network = document.getElementById('network')
let amounts = document.getElementById('amount')
let airtime ;

function pinGenerate() {
    // cards.innerHTML = Math.floor(Math.random(newCard) * 100000000000000);
    if (network.value == "" || amounts.value ==""){
        alert("Select Amounts and Your Preffered Services Provider")
    }else{
       airtime = Math.floor(Math.random(newCard) * 100000000000000);
       cards.innerHTML = airtime;
    }
}





let cardEnter = document.getElementById('loadCard')

function loadAirtime() {

    if (cardEnter.value == ""){
        alert("Fill the Input")
    } 
    else if (cardEnter.value.startsWith("*311*") && cardEnter.value .includes(airtime) && cardEnter.value.endsWith("#") ){
        alert(` you have successfully recharge  ${network.value}  ${amounts.value} airtime`)
    }else{
        alert('Incorret Pin')
    }
    console.log(network .value);
    console.log(amounts.value);


}

