/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

const animali = [
    {
        nome: "gatto",
        famiglia: "felini",
        classe: "mammiferi",
    },
    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi",
    },
    {
        nome: "zebra",
        famiglia: "equidi",
        classe: "mammiferi",
    },
    {
        nome: "merlo",
        famiglia: "turdidi",
        classe: "volatili",
    },
    {
        nome: "rondine",
        famiglia: "irundinidi",
        classe: "volatili",
    },
    {
        nome: "croccodrillo",
        famiglia: "coccodrilli",
        classe: "rettili",
    }
];

const animaliFilter = animali.filter((element) => {
    if (element.classe == "mammiferi") return true;
})

console.table(animali);
console.table(animaliFilter);