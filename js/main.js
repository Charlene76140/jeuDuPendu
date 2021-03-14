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

// loop until the user's points drop to zero or until userResultArray equals answerArray
while(playerPoints > 0){
    // get and check the letter of user
    var userLetter = getUserLetter();
    // check if the letter is in the word
   compareLetterOnWord();

   // if array with user's letters is equal of array with computer word, so stop the loop
    if(userResultArray.join() === answerArray.join()){
        alert("Bravo, c'est gagné!");
        break;
    }
    
    // if the user's points fall to 0, the player has lost
    else if(playerPoints === 0){
        alert("C'est perdu... \nLe mot a trouver était : " + choiceComputer)
    } 
};