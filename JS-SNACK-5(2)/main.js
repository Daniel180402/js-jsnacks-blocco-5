
const cars = [
    {
        marca : "volkswagen",
        modello: "Gti",
        alimentazione: "benzina",
    },
    {
        marca : "bmw",
        modello: "I4",
        alimentazione: "elettricità",
    },
    {
        marca : "porsche",
        modello: "Panamera turbo",
        alimentazione: "benzina",
    },
    {
        marca : "bmw",
        modello: "330d",
        alimentazione: "disel",
    },
    {
        marca : "tesla",
        modello: "model 3",
        alimentazione: "elettricità",
    },
    {
        marca : "merceds",
        modello: "sls dark edition",
        alimentazione: "benzina",
    },
    {
        marca : "volkswagen",
        modello: "up",
        alimentazione: "elettricità",
    },
    {
        marca : "fiat",
        modello: "panda",
        alimentazione: "benzina-agricola",
    }
];

const benza = cars.filter((element) =>{
    if (element.alimentazione == "benzina") return true
});
const disel = cars.filter((element) =>{
    if (element.alimentazione == "disel") return true
});
const altro = cars.filter((element) =>{
    if (element.alimentazione != "benzina" && element.alimentazione != "disel") return true
});

console.table(benza);
console.table(disel);
console.table(altro);