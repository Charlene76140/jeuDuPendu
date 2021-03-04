//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "ordinateur",
    "chien",
];

let playerPoints = 0;

//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

//fonction permettant de générer un choix par l'ordinateur
function generateChoice(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
}

let random = generateChoice();
console.log(random);



//fonction permettant de vérifier que le joueur a bien saisi une lettre
function checkLetter(){
   for(let i = 0; i < 5 ; i++){
        let choiceUser = prompt((random.replace(random, "_") + "\nmerci de saisir une lettre (entre a et z)"));
        
        if (choiceUser.length === 1){
        return choiceUser.toLowerCase();
        }

        else{
        alert("merci de saisir une seule lettre");
        }
   }    
};

let choiceUsr = checkLetter();
console.log(choiceUsr);


//fonction permettant comparer la lettre choisi avec le mot de l'ordinateur

function compareLetterWord(){
    let compare = Array.from(random);
    console.log(compare)

    for(oneletter of compare){
        if(compare.includes(choiceUsr)){
            console.log("oui cette lettre est présente");
        } 
        else{
            console.log("c'est perdu")
        }
    } 
};

compareLetterWord();


// fonction permettant de remplacer les lettres du mot choisit par l'utilisateur 








