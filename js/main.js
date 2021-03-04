//mes variables gloables-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "ordinateur",
    "chien",
];

let playerPoints = 0;

//mes fonctions------------------------------------------------------------

function generateChoice(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
}
let random = generateChoice();
console.log(random);



















//mon code -----------------------------------------------------------------