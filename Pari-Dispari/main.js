//Funzione per generare un numero random tra 1 a 5

function numeroRandom(){
    return Math.floor(Math.random() * 5) + 1;
}

//Chiedere all'utente di scegliere pari o dispari
let userChoice = prompt("Scegli 'pari' o 'dispari':");

//Scelta utente del numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

//Numero random per il computer
let computerNumber = numeroRandom();

//Somma dei due numeri
let somma = userNumber + computerNumber;

//Controllare se la somma è pari o dispari
let sommaRisultato;
if (somma % 2 === 0){
    sommaRisultato = "pari";
} else{
    sommaRisultato = "dispari";
}

//Risultati
alert ("Numero del computer:" + computerNumber);
alert ("Somma:" + somma);
alert ("La somma è " + sommaRisultato);

//Dichiarare il vincitore
if (userChoice === sommaRisultato){
    alert("Hai vinto");
}else{
    alert("Hai perso");
  }
