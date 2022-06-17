
const emailList = [
    'topolino@walt-disney.com',
    'paperino@walt-disney.com',
    'pluto@walt-disney.com',
    'pippo@walt-disney.com',    
];

const userEmail = prompt('Inserisci la tua email');

for ( index = 0; index < emailList.length ; index++ );{


    if ( userEmail == emailList[index] ) {
        alert("Hai effettuato l'accesso!");

    } else {
        alert( "Email sconosciuta, accesso negato." );

    }

    console.log(emailList[index]);
}
