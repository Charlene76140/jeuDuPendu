//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "camion",
    "maison",
    "chemin",
    "parking",
];

//nombre de point du joueur en début de partie
let playerPoints = 7;

// permet d'afficher des underscores
let userResultArray=[];

//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

// 1 - fonction permettant de générer un choix par l'ordinateur dans la liste choicesCmp
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
};



//2 - fonction pour répartir les lettres du tableau en mot : ["m","a","i","s","o","n"] = > renvoi à la variable answerArray
function makeNewArray(){
    let newArr = Array.from(choiceComputer);
    return newArr;
};



//3 - fonction pour masquer les lettres par des underscores : ["_ _ _ _ _ _ _ "] = > renvoi à la variable userResultArray
function hideLetter(){
    for(i=0; i < answerArray.length; i++){
        userResultArray.push(" _ ");
    }
};


//4 - fonction permettant de vérifier que le joueur a bien saisi une lettre et récupérer sa lettre choisie = > variable userLetter
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


//5 - fonction permettant de comparer la lettre choisi avec le mot de l'ordinateur = > 
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

//message de bienvenue à l'utilisateur
console.log("Bonjour et bienvenue sur ce jeu du pendu. Prêt à jouer?"); 

//le pc choisit un mot dans la liste (non visible pour l'utilisateur)
let choiceComputer = generateChoiceRandom();
console.log(choiceComputer);

//le mot est mis sous forme de tableau (non visible pour l'utilisateur)
let answerArray = makeNewArray();
console.log(answerArray);

//les lettres sont cachés pour l'utilisateur
hideLetter();


// boucle tant que les points de l'utilisateur ne tombe pas a zéro ou tant que userResultArray n'est pas égal à answerArray
while(playerPoints > 0){
    // On récupère la lettre entrée par l'utilisateur
    var userLetter = getUserLetter();
    // On regarde si la lettre de l'utilisateur est bien présente dans le tableau des réponses
   compareLetterOnWord();

   // si le tableau contenant les lettres de l'utilisateur est égal au tableau contenant le mot (en format ["m","a","i","s"]) alors arrete de boucler
    if(Object.is(userResultArray.toString(), answerArray.toString())){
        break;
    }
    
    // si les points de l'utilisateur tombe à 0, le joueur a perdu
    else if(playerPoints === 0){
    alert("C'est perdu... \nLe mot a trouver était : " + choiceComputer)
    } 

};

// alerte pour les vainqueurs
if(Object.is(userResultArray.toString(), answerArray.toString())){
    alert("Bravo, c'est gagné!");
}
