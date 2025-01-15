// Funzione per verificare se una parola è palindroma
function isPalindrome(word) {
    let cleanedWord = word.toLowerCase();
    
// Invertire la parola
let reversedWord = cleanedWord.split("").reverse().join("");
return cleanedWord === reversedWord;
}

// Chiedere all'utente di inserire una parola
let userWord = prompt("Inserisci una parola:");

// Verifichiare se la parola è palindroma
if (isPalindrome(userWord)) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma.");
}
