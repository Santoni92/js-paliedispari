/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/ 

console.log('JS OK!');  //per verificare che lo script js sia ben collegato all'html

let parolaUtente = prompt("Programma che verifica se la parola inserita dall'utente sia una parola palindroma ovvero una parola che letta o da sinistra verso destra o  viceversa non cambia. Inserisci parola: ");
parolaUtente.trim().toLowerCase();
isPal(parolaUtente);

/*funzione che data una stringa in ingresso mi stampa la stringa rovesciata,ad esempio, se in ingresso gli
 do la stringa "abc" essa mi ritorna la stringa "cba" */
function rovesciaStringa(array){
    let stringaRovesciata = "";
    for(let i = (array.length - 1); i >= 0; i--){
        stringaRovesciata += array[i];
    }
    return stringaRovesciata;
}
/*Implementazione funzione isPal
Questa funzione riceve in ingresso una stringa, richiama un'altra funzione che restituisce rovesciata la stringa ricevuta in ingresso ;dopodichè 
va a confrontare l'argomento dato in ingresso con la stringa rovesciata*/
function isPal(parola){
    parolaRovesciata = rovesciaStringa(parola);   /*ottengo come output di questa funzione un array che rappresenta la parola 
                                                  inserita dall'utente scritta da però da destra verso sinistra */

    let isPal = true;
    for(let i = 0; i < parola.length; i++)
    {
        if(parola[i] !== parolaRovesciata[i])
        {
            isPal = false;
        }
    }
    if(parola === parolaRovesciata){
        return prompt('La parola inserita risulta essere una parola palindroma!!!');
    }else{
        return prompt('La parola inserita non risulta essere una parola palindroma!!!');
    }
}

/*Oppure senza trasformare la parola inserita dall'utente tutta in minuscolo modifico la mia funzione 'isPal'
in modo tale che venga effettuato il controllo su ciascuna delle lettere della parola inserita e della sua versione rovesciata
function isPal(parola){
    parolaRovesciata = rovesciaStringa(parola)
    let isPal = true;
    for(let i = 0; i < parola.length; i++)
    {
        if(parola[i] !== parolaRovesciata[i])
        {
            isPal = false;
        }
    }
    if(isPal){
        console.log('La parola inserita risulta essere palindroma!!!');
    }else{
        console.log('La parola inserita non risulta essere palindroma!!!');
    }
*/