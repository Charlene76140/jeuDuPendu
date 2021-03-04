//mes variables gloables-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "ordinateur",
    "chien",
];

let playerPoints = 0;

let choiceUser= "";

//mes fonctions------------------------------------------------------------

//fonction permettant de générer un choix par l'ordinateur
function generateChoice(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
}
let random = generateChoice();
console.log(random);


//fonction permettant de vérifier que le joueur a bien sais une lettre
function checkLetter(letter){
   for(let i = 0; i < 5 ; i++){
        let choiceUser = prompt("merci de saisir une lettre (entre a et z)");

        if(choiceUser.length === 1){
        return choiceUser.toLowerCase();
        }

        else{
        alert("merci de saisir une seule lettre");
        }
   }    
};

//fonction permettant de 


let choice = checkLetter();
console.log(choice);

