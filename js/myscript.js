let userInputKm = prompt ("Quanti chilometri vuoi percorrere?");
let userInputAge = prompt ("Quanti anni ha il passeggero?");
let pricePerKm = 0.21;

let ticketPrice = userInputKm * pricePerKm;

if(userInputAge < 18) {
    document.getElementById("finalTicketPrice").innerHTML = 
    (ticketPrice - ((ticketPrice * 20) / 100)) .toFixed(2) + "€";
}else if(userInputAge > 65) {
    document.getElementById("finalTicketPrice").innerHTML = 
    (ticketPrice - ((ticketPrice * 40) / 100)) .toFixed(2) + "€";
}else {
    document.getElementById("finalTicketPrice").innerHTML = ticketPrice .toFixed(2) + "€";
}