/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const giocatore = {
    codice: "",
    nome: "Giorgio",
    cognome: "Giorgetti",
    età: "74",
    media: "",
    percentuali: ""
}

giocatore.codice = generatePlayerCode();

giocatore.media = Math.floor(Math.random() * ((50 + 1) - 0) + 0);
giocatore.percentuali = Math.floor(Math.random() * ((100 + 1) - 0) + 0);

function generatePlayerCode(){
    return makeId(3) + makeNumId(3);
}

function makeId(length){
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makeNumId(length){
    let result = "";
    let characters = "1234567890";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(giocatore);