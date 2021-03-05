//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "ordinateur",
    "pompier",
];

//nombre de point du joueur en début de partie
let playerPoints = 7;

// permet d'afficher des underscores
let result="";

//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

//fonction permettant de générer un choix par l'ordinateur
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
};

//fonction permettant de vérifier que le joueur a bien saisi une lettre et récupérer sa lettre choisie
function checkUserLetter(){
   for(let i = 0; i < 100 ; i++){
    let choiceUser = prompt(result + "\n merci de saisir une lettre (entre a et z)");
    // rajouter le nombre a vérifier
        if (choiceUser.length === 1){
        return choiceUser.toLowerCase();
        }

        else{
        alert("merci de saisir une seule lettre");
        }
   }    
};

//fonction permettant de comparer la lettre choisi avec le mot de l'ordinateur
function compareLetterOnWord(){
  
    // tant que l'utilisateur a des points ou tant qu'il ne trouve pas le mot
    for(oneletter of compare){
        if(compare.includes(choiceUsr)){
            // faire apparaitre la lettre qu'il a séléctionné
        } 
        else{
            return playerPoints -= 1;
        }
    } 
};



//-------------------------------------------------- Mon code --------------------------------------------------------------------------------------

//message de bienvenue à l'utilisateur
alert("Bonjour et bienvenue sur ce jeu du pendu. Prêt à jouer?"); 


//génère le mot du PC
let choiceComputer = generateChoiceRandom();
console.log(choiceComputer);

//fait en sorte que le choix du PC devienne un tableau  ["m","a","i","s","o","n"]
let compare = Array.from(choiceComputer);

//affiche à l'utilisateur le choix du pc caché derrière des underscores ["_ _ _ _ _ _ _ "]
for(i=0; i < compare.length; i++){
    result += "_ "
}


//verifie que l'utilisateur a bien saisi une lettre et pas plusieurs
let choiceUsr = checkUserLetter();
// console.log(choiceUsr);

// compare la lettre de l'utilisateur avec le mot du PC
compareLetterOnWord();


console.log(playerPoints);











