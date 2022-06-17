
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


if (emailMatch == true) {
    alert("Accesso eseguito.");

} else if (emailMatch == false) {

    alert("Email sconosciuta, accesso negato.");
}








   