//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------
//list for computer choice
let choicesCmp = [
    "securite",
    "maison",
    "chemin",
    "reseau",
    "camping",
];
//number of player points at the start of the game
let playerPoints = 7;
const commands = ["j","r","q"];
//------------------------------------------------------MES FONCTIONS------------------------------------------------------------
// 1 - function used to get choice user between "play", "rules" or "exit"
function getChoiceUserCommand(){
    do {
        var userCommand = prompt("Voici les commandes disponibles: \n j : Jouer \n r : Règles \n q : quitter");
    }
    while(!commands.includes(userCommand));
    return userCommand;
};

// 1bis - function used to generate a choice by the computer in the choicesCmp list
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
    // display underscores
    let resultArray=[];
    for(i=0; i < answerArray.length; i++){
        resultArray.push(" _ ");
    }
    return resultArray;
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
        playerPoints -= 1
        alert("Non la lettre n'est pas présente \nPoints restants : " + playerPoints);
        return false;
    }
};

function play(){
    //Welcome
    alert("C'est partis!"); 
    //the computer chooses a word from the list (not visible to the user)
    choiceComputer = generateChoiceRandom();
    //the word is put in the form of a table (not visible to the user)
    answerArray = makeNewArray();
    //the letters are hidden for the user
    userResultArray = hideLetter();
    // loop until the user's points drop to zero or until userResultArray equals answerArray
    while(playerPoints > 0){
        // get and check the letter of user
        userLetter = getUserLetter();
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
    }
};
//-------------------------------------------------- MON CODE --------------------------------------------------------------------------------------
//commands possibles
while(true){
    let choiceUserCommand = getChoiceUserCommand();
    if(choiceUserCommand === "j"){
        playerPoints = 7;
        play();
    }
    else if(choiceUserCommand === "r"){
        alert("Voici les règles du jeu : bla bla bla bla bla");
    }
    else{
        alert("A bientôt peut-etre!");
        break;
    }
};