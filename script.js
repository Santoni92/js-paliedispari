/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/ 

console.log('JS OK!');  //per verificare che lo script js sia ben collegato all'html

let parolaUtente = prompt("Programma che verifica se la parola inserita dall'utente sia una parola palindroma ovvero una parola che letta o da sinistra verso destra o  viceversa non cambia. Inserisci parola: ");

isPal(parolaUtente);

/*funzione che dato un array in ingresso mi stampa l'array con gli elementi rovesciati,ad esempio, se in ingresso gli
 do l'array [1,2,3] essa mi ritorna l'array [3,2,1]*/
function rovesciaArray(array){
    let arrayRovesciato = [];
    for(let i = (array.length - 1); i >= 0; i--){
        arrayRovesciato.push(array[i]);
    }
    return arrayRovesciato;
}
/*Implementazione funzione isPal
Questa funzione riceve in ingresso una stringa, richiama un'altra funzione che restituisce rovesciata la stringa ricevuta in ingresso ;dopodichè 
va a confrontare l'argomento dato in ingresso con la stringa rovesciata*/
function isPal(parola){
    parolaRovesciata = rovesciaArray(parola);   /*ottengo come output di questa funzione un array che rappresenta la parola 
                                                  inserita dall'utente scritta da però da destra verso sinistra */
    if(parola === parolaRovesciata){
        return prompt('La parola inserita risulta essere una parola palindroma!!!');
    }else{
        return prompt('La parola inserita non risulta essere una parola palindroma!!!');;
    }
}