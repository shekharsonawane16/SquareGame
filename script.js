const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");


// ------------------------------------
// Square 1 - Random Number
// ------------------------------------

s1.addEventListener("mouseenter", () => {

    const randomNumber = Math.floor(Math.random() * 100);

    s1.querySelector(".number").textContent = randomNumber;

});

s1.addEventListener("mouseleave", () => {

    s1.querySelector(".number").textContent = "1";

});


// ------------------------------------
// Square 2 - Color Cycle
// ------------------------------------

const colors = [
    "#ef4444",
    "#22c55e",
    "#3b82f6",
    "#a855f7",
    "#f97316"
];

let colorIndex = 0;

s2.addEventListener("mouseenter", () => {

    s2.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

});

s2.addEventListener("mouseleave", () => {

    s2.style.backgroundColor = "#ffffff";

});


// ------------------------------------
// Square 3 - Random Color
// ------------------------------------

function generateRandomColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

}

s3.addEventListener("mouseenter", () => {

    s3.style.backgroundColor = generateRandomColor();

});

s3.addEventListener("mouseleave", () => {

    s3.style.backgroundColor = "#ffffff";

});


// ------------------------------------
// Square 4 - Color Blast
// ------------------------------------

s4.addEventListener("click", () => {

    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const color3 = generateRandomColor();

    s1.style.backgroundColor = color1;
    s2.style.backgroundColor = color2;
    s3.style.backgroundColor = color3;

});

s4.addEventListener("mouseleave", () => {

    s1.style.backgroundColor = "#ffffff";
    s2.style.backgroundColor = "#ffffff";
    s3.style.backgroundColor = "#ffffff";

});
