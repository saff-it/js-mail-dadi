// ESERCIZIO 1

const emailList = [
    'topolino@walt-disney.com',
    'paperino@walt-disney.com',
    'pluto@walt-disney.com',
    'pippo@walt-disney.com',    
];

const userEmail = prompt('Inserisci la tua email');
let emailMatch = false;


for ( let index = 0; index < emailList.length ; index++ ) {
   
    console.log(emailList[index]);

    if ( userEmail == emailList[index] ) {
        emailMatch = true;
        
    } 
  
}


if (emailMatch) {
    alert("Accesso eseguito.");

} else {
    alert("Email sconosciuta, accesso negato.");

}


// ESERCIZIO 2

const userNumber = Math.floor( (Math.random() * 10 ) +1);
const computerNumber = Math.floor( (Math.random() * 10 ) +1);

console.log(userNumber, computerNumber);

if (userNumber > computerNumber) {
    alert('Hai vinto!');

} else if (userNumber < computerNumber) {
    alert('Hai perso!');

} else {
    alert('Non ha vinto nessuno ritenta!');

}




   