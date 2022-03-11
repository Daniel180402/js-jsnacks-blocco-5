const persone = [
    {
        nome: "marco",
        cognome: "rossi",
        età: "17",
    },
    {
        nome: "giovanni",
        cognome: "verdi",
        età: "65",
    },
    {
        nome: "giuseppe",
        cognome: "gialli",
        età: "42",
    },
    {
        nome: "marta",
        cognome: "neri",
        età: "19",
    },
    {
        nome: "giogia",
        cognome: "bianchi",
        età: "22",
    },
];

const personeFilter = persone.filter((element) => {
    if (element.età >= 18){
        console.log("puoi guidare!");
    }
    else{
        console.log("non puoi guidare!");
    }   
})
