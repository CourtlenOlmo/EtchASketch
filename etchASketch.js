const gameContainer = document.getElementById("gameContainer");
let blocksOriginal = document.getElementById("myRange").value;
let blocks = document.getElementById("myRange").value ** 2;
let slideNumber = document.getElementById("slideNumber");
let slideValue = document.getElementById("myRange");
let regenerateButton = document.getElementById("regenerateButton");
let innerSquares = document.getElementsByClassName("innerSquares");

//Below section creates a style element to update css rules to make squares.
style=document.createElement('style');
document.head.appendChild(style);
stylesheet=style.sheet;
function css(selector,property,value)
{
    try{ stylesheet.insertRule(selector+' {'+property+':'+value+'}',stylesheet.cssRules.length); }
    catch(err){}
};

//Takes slider value and creates blocks with it by changing the css rule.
function createGame(blocks, blocksOriginal){
    console.log(blocksOriginal);
    css("#gameContainer","grid-template-columns","repeat("+blocksOriginal+", 1fr);");
    for (let i = 1; i <= blocks; i++){
    const gameChild = document.createElement("div");
    gameChild.classList.add("innerSquares");
    gameContainer.append(gameChild);

    console.log("test");
}};

function regenerateBoard(){
    while (gameContainer.firstChild){
        gameContainer.removeChild(gameContainer.firstChild);
}};

window.onload = createGame(blocks, blocksOriginal); //Set's initial value of 16

//Resets the board and adds in a new set of blocks
regenerateButton.addEventListener("click", () => {
    regenerateBoard();
    createGame(blocks, blocksOriginal);
});

//Slider Function to display the current value
slideNumber.textContent = "Number of blocks: " + blocksOriginal  + " x " + blocksOriginal;
slideValue.addEventListener('change', function(){
    blocksOriginal = document.getElementById("myRange").value;
    slideNumber.textContent = "Number of blocks: " + blocksOriginal + " x " + blocksOriginal;
    blocks = blocksOriginal ** 2;
    return blocks, blocksOriginal;
});

//innerSquares.addEventListener("onmouseover", () => {

//})