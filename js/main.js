//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "ordinateur",
    "chien",
];

//nombre de point du joueur en début de partie
let playerPoints = 0;

//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

//fonction permettant de générer un choix par l'ordinateur
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
}

//////////////////////////////



//fonction permettant de vérifier que le joueur a bien saisi une lettre
function checkUserLetter(){
   for(let i = 0; i < 5 ; i++){
    let choiceUser = prompt("merci de saisir une lettre (entre a et z)");
        if (choiceUser.length === 1){
        return choiceUser.toLowerCase();
        }

        else{
        alert("merci de saisir une seule lettre");
        }
   }    
};

//fonction permettant comparer la lettre choisi avec le mot de l'ordinateur
function compareLetterOnWord(){
    let compare = Array.from(choiceComputer);
    console.log(compare);
    for(oneletter of compare){
        if(compare.includes(choiceUsr)){
            console.log("oui cette lettre est présente");
        } 
        else{
            console.log("non cette lettre n'est pas dans le mot")
        }
    } 
};



//-------------------------------------------------- Mon code --------------------------------------------------------------------------------------

alert("Bonjour et bienvenue sur ce jeu du pendu. Prêt à jouer?"); 

let choiceComputer = generateChoiceRandom();
console.log(choiceComputer);

//afficher le choiceComputer en underscore////////
let choiceUsr = checkUserLetter();
console.log(choiceUsr);

compareLetterOnWord();












