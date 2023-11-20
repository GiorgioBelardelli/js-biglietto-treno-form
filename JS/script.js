
const inputNome = document.querySelector("#name")
const inputCognome = document.querySelector("#surName")
const inputEta = document.querySelector("#age")
const inputDistance = document.querySelector("#distance")
const calculateButton = document.getElementById("calculateButton")


let nomeUser;
let cognomeUser;
let distanceUser;
let etaUser;


calculateButton.addEventListener("click",

    function(){

        nomeUser = inputNome.value;
        console.log(nomeUser);

        cognomeUser = inputCognome.value;
        console.log(cognomeUser);

        distanceUser = inputDistance.value;
        console.log(distanceUser);

        etaUser = inputEta.value;
        console.log(etaUser);

        let ticketPrice = parseFloat(distanceUser * 0.21);

        if ( etaUser < 18 ){

        const juniorSale = 0.80;
        ticketPrice = ticketPrice * juniorSale;

        } else if ( etaUser > 65){

        const elderSale = 0.60;
        ticketPrice = ticketPrice * elderSale;

        };

        document.getElementById("tot-prezzo").innerHTML = "Il costo del tuo biglietto e' di: " + ticketPrice + " euro"
    }

);









