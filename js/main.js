//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//list for computer choice
let choicesCmp = [
    "pompier",
    "maison",
    "chemin",
    "parking",
    "camping",
];

//number of player points at the start of the game
let playerPoints = 7;

// display underscores
let userResultArray=[];
//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

// 1 - function used to generate a choice by the computer in the choicesCmp list
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
};

// 2- function to divide the letters of the array into words: ["m", "a", "i", "s", "o", "n"] => reference to the answerArray variable
function makeNewArray(){
    let newArr = Array.from(choiceComputer);
    return newArr;
};

//3 - function to hide letters with underscores: ["_ _ _ _ _ _ _"] => reference to the userResultArray variable
function hideLetter(){
    for(i=0; i < answerArray.length; i++){
        userResultArray.push(" _ ");
    }
};

//4 - function to check that the player has entered a letter and retrieve his chosen letter => userLetter variable
function getUserLetter(){
   for(let i = 0; i < 100 ; i++){
    let choiceUser = prompt(userResultArray.join() + "\n merci de saisir une lettre (entre a et z)");
    // rajouter le nombre a vérifier
        if (choiceUser.length === 1 && isNaN(choiceUser)){
            return choiceUser.toLowerCase();
        }

        else{
            alert("merci de saisir une seule lettre");
        }
   }    
};


//5 - function allowing to compare the selected letter with the word of the computer
function compareLetterOnWord(){
    if(answerArray.includes(userLetter)){
        for(i = 0; i < answerArray.length; i++){
            if(userLetter === answerArray[i]){ 
                userResultArray[i] = userLetter;
                alert("Oui la lettre '" + userLetter + "' est présente! \n" + userResultArray.join());
            }
        }
    }
    else{
        alert("Non la lettre n'est pas présente \nPoints restants : " + (playerPoints -= 1));
        return false;
    }
};           
//-------------------------------------------------- MON CODE --------------------------------------------------------------------------------------

//Welcome
alert("Bonjour et bienvenue sur ce jeu du pendu. Prêt à jouer?"); 

//the computer chooses a word from the list (not visible to the user)
let choiceComputer = generateChoiceRandom();


//the word is put in the form of a table (not visible to the user)
let answerArray = makeNewArray();


//the letters are hidden for the user
hideLetter();

// boucle tant que les points de l'utilisateur ne tombe pas a zéro ou tant que userResultArray n'est pas égal à answerArray
while(playerPoints > 0){
    // On récupère la lettre entrée par l'utilisateur
    var userLetter = getUserLetter();
    // On regarde si la lettre de l'utilisateur est bien présente dans le tableau des réponses
   compareLetterOnWord();

   // si le tableau contenant les lettres de l'utilisateur est égal au tableau contenant le mot (en format ["m","a","i","s"]) alors arrete de boucler
    if(userResultArray.join() === answerArray.join()){
        alert("Bravo, c'est gagné!");
        break;
    }
    
    // si les points de l'utilisateur tombe à 0, le joueur a perdu
    else if(playerPoints === 0){
        alert("C'est perdu... \nLe mot a trouver était : " + choiceComputer)
    } 
};