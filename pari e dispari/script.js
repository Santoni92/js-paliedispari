/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/



let sceltaUtente = prompt('pari o dispari ?').trim().toLowerCase();

while(sceltaUtente !== 'pari' && sceltaUtente !== 'dispari')  /*fintantoché  l'utente non inserisce la stringa "pari" o la stringa "dispari"
                                                                chiedi la scelta;ho usato la funzione trim() che elimina eventuali spazi all'inizio o alla fine
                                                                della stringa inserita ed questa funzione restituisce una stringa sulla quale poi successivamente richiamo il metodo toLowerCase()
                                                                per trasformare tutta in minuscolo la stringa*/
{
    sceltaUtente = prompt('pari o dispari ?');
    sceltaUtente.trim().toLocaleLowerCase();
}

let numeroInserito = parseInt(prompt('Inserisci numero: '));
while(isNaN(numeroInserito) || (numeroInserito < 1 || numeroInserito > 5))  /*fintantoché l'utente non inserisce un valore numerico(che sia effettivamente un numero) o fintantoché 
                                                                            non inserisce un numero che sia compreso tra 1 ed 5 chiedigli di inserire un numero */
{
    numeroInserito = parseInt(prompt('Inserisci numero: '));
}
console.log("numero inserito dall'utente: " + numeroInserito);
numeroGeneratoDalPc = generaNumeroRandom(1,5);  //passo come argomento della funzione i due estremi dell'intervallo all'interno del quale dovrà ricadere il numero random generato 
console.log("numero random generato dal computer: "  + numeroGeneratoDalPc);


let somma = 0;
somma = numeroInserito + numeroGeneratoDalPc;
console.log("somma dei due numeri: " + somma);


if((sceltaUtente === "pari" && isEvenOrOdd(somma)) || (sceltaUtente === "dispari" && !isEvenOrOdd(somma)))
{
    prompt("Ha vinto l'utente!!!")
}else{
    prompt("Ha vinto il computer!!!")
}


//implementazione funzione per generare un numero random compreso in un determinato intervallo
function generaNumeroRandom(min,max){
    /*come faccio a controllare che effettivamente alla funzione gli vengano passati come parametri due numeri e in particolare numeri comprewsi tra 1 ed 5 ?
    while(isNaN(min) || isNaN(max)){
        return error;  BOH
    }
    let temp;
    if(min > max){  //controllo che effettivamente siano passati come argomenti alla funzione prima l'estremo inferiore e come secondo parametro l'estremo superiore
        temp = min;
        min = max;
        max = temp;
    }else if(min == max){
        prompt("Hai inserito estremi dell'intervallo uguali");
    }
    */
    const range = max - min + 1;
    const numeroGenerato = Math.floor(Math.random() * range) + min;
    return numeroGenerato;
}
//implementazione funzione che riceve in ingresso un numero e ritorna 'true' se il numero inserito è pari altrimenti 'false' se è dispari
function isEvenOrOdd(numero)
{
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}