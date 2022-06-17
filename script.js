
const emailList = [
    'topolino@walt-disney.com',
    'paperino@walt-disney.com',
    'pluto@walt-disney.com',
    'pippo@walt-disney.com',    
];

const userEmail = prompt('Inserisci la tua email');

for ( let index = 0; index < emailList.length ; index++ ) {

    console.log(emailList[index]);
    
    if ( userEmail == emailList[index] ) {
        alert("Hai effettuato l'accesso!");
        

    } else if ( userEmail != emailList[index] ){
        alert( "Email sconosciuta, accesso negato." );
        

    } 

    
}
