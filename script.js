const containerDiv = document.getElementById("container");
const buttonContainer = document.getElementById("button-container");
const toggleNumSquaresButton = document.createElement("button");
const resetButton = document.createElement("button");
const containerWidthHeight = 960;
let defaultSquareSize = 16; 
let numOfSquares = 960 / defaultSquareSize;

function createSquares() 
{
    const numSquaresX = Math.floor(containerWidthHeight / defaultSquareSize);
    const numSquaresY = Math.floor(containerWidthHeight / defaultSquareSize);
    const totalSquares = numSquaresX * numSquaresY;

    for (let i = 0; i < (defaultSquareSize ** 2); i++) {
        const square = document.createElement("div");
        square.style.width = numOfSquares + "px";
        square.style.height = numOfSquares + "px";
        square.style.backgroundColor = "#fff";
        containerDiv.appendChild(square);
        square.addEventListener("mouseover", (e) => {
            const randomColor = getRandomColor();
            console.log(randomColor);
            e.target.style.backgroundColor = randomColor;
        });
    }
}

function toggleNumOfSquares() 
{
    toggleNumSquaresButton.classList.add("button");
    toggleNumSquaresButton.textContent = "Change Number of Squares Per Side"; 
    toggleNumSquaresButton.addEventListener("click", () => {
        defaultSquareSize = parseInt(prompt("Enter the number of squares per side: "));
        numOfSquares = 960 / defaultSquareSize;
        containerDiv.innerHTML = ""; 
        createSquares(); 
    });
    buttonContainer.appendChild(toggleNumSquaresButton); 
}

function resetCanvas()
{
    resetButton.classList.add("button");
    resetButton.textContent = "Reset Canvas";
    resetButton.addEventListener("click", () => {
        containerDiv.innerHTML = "";
        createSquares();
    });
    buttonContainer.appendChild(resetButton);
}

function getRandomColor() 
{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red},${green},${blue})`;

    return color;
}

createSquares();
toggleNumOfSquares();
resetCanvas();

