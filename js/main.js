//----------------------------------------------------MES VARIABLES GLOBALES-----------------------------------------------------

//liste de mot pour le choix PC
let choicesCmp = [
    "maison",
    "voiture",
    "chemin",
    "parking",
];

//nombre de point du joueur en début de partie
let playerPoints = 7;

// permet d'afficher des underscores
let result=[];


//------------------------------------------------------MES FONCTIONS------------------------------------------------------------

// 1 - fonction permettant de générer un choix par l'ordinateur dans la liste choicesCmp
function generateChoiceRandom(){
    let random = Math.floor(Math.random() * Math.floor(choicesCmp.length));
    return choicesCmp[random];
};







//2 - fonction pour répartir les lettres du tableau en mot : ["m","a","i","s","o","n"];
function makeNewArray(){
    let newArr = Array.from(choiceComputer);
    return newArr;
};






//3 - fonction pour masquer les lettres par des underscores : ["_ _ _ _ _ _ _ "]
function hideLetter(){
    for(i=0; i < newArrayLetter.length; i++){
        result.push(" _ ")
    }
};




//4 - fonction permettant de vérifier que le joueur a bien saisi une lettre et récupérer sa lettre choisie
function getUserLetter(){
   for(let i = 0; i < 100 ; i++){
    let choiceUser = prompt(result.join() + "\n merci de saisir une lettre (entre a et z)");
    // rajouter le nombre a vérifier
        if (choiceUser.length === 1){
        return choiceUser.toLowerCase();
        }

        else{
        alert("merci de saisir une seule lettre");
        }
   }    
};




//5 - fonction permettant de comparer la lettre choisi avec le mot de l'ordinateur
function compareLetterOnWord(){
    if(newArrayLetter.includes(choiceUsr)){
        for(i = 0; i < newArrayLetter.length; i++){
            if(choiceUsr === newArrayLetter[i]){
                result[i] = choiceUsr;
                alert(result);
            }   
        }
    }
    else{
        alert("Points restants : " + (playerPoints -= 1));
    }
};           



//-------------------------------------------------- Mon code --------------------------------------------------------------------------------------

//message de bienvenue à l'utilisateur
console.log("Bonjour et bienvenue sur ce jeu du pendu. Prêt à jouer?"); 

//le pc choisit un mot dans la liste
let choiceComputer = generateChoiceRandom();
console.log(choiceComputer);

//le mot est mis sous forme de tableau 
let newArrayLetter = makeNewArray();
console.log(newArrayLetter)

hideLetter();

// boucle tant que les points de l'utilisateur ne tombe pas a zéro ou tant que result !== à newArrayLetter

// let choiceUsr = getUserLetter();
// console.log(choiceUsr);

// compareLetterOnWord();

while(playerPoints > 0 || result === newArrayLetter){
    var choiceUsr = getUserLetter();
    console.log(choiceUsr);
    compareLetterOnWord();
};

