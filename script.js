let click = true;

function populateBoard(size) {
    let sketchPad = document.querySelector(".sketch-pad");
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = sketchPad.querySelectorAll("div");
    squares.forEach(div => div.remove());

    let amount = size * size

    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor);
        square.style.backgroundColor = "#E8F1E8";
        sketchPad.insertAdjacentElement("beforeend", square);
    };
}

populateBoard(16);

function changeSize(input) {
    let size = input;
    if (input < 2) {
        size = 2;
        alert("Canvas size cannot be smaller than 2, or larger than 100")
    } else if (input > 100) {
        size = 100;
        alert("Canvas size cannot be smaller than 2, or larger than 100")
    }
    populateBoard(size);
}

let color = "black";

function changeColor() {
    if (click === true) {
            if (color == "random") {
                this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            } else {
                this.style.backgroundColor = color;
            }
    }
}

function colorSquare(choice) {
    color = choice;
}

function clear() {
    let sketchPad = document.querySelector(".sketch-pad");
    let squares = sketchPad.querySelectorAll("div");
    squares.forEach(div => div.style.backgroundColor = "#E8F1E8");
}

document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
    }
})