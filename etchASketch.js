const gameContainer = document.getElementById("gameContainer");
const gameChild = document.createElement("div");
let blocks = document.getElementById("myRange").value;
let slideNumber = document.getElementById("slideNumber");
let slideValue = document.getElementById("myRange");

//Slider Function to display the current value
slideNumber.textContent = "Number of blocks: " + blocks + " x " + blocks;
slideValue.addEventListener('change', function(){
    blocks = document.getElementById("myRange").value;
    slideNumber.textContent = "Number of blocks: " + blocks + " x " + blocks;
});

//Takes slider value and creates blocks with it
for (let i = 0; i <= blocks; i++){
    gameContainer.appendChild(gameChild);
}


