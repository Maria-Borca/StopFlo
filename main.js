import './style.css'

const button1 = document.getElementById("potatoes-button");
const potatoesText = document.getElementById("potatoes");
let isPressed1 = 0;

button1.addEventListener("click", () => {
    if (isPressed1 === 0) {
        potatoesText.innerText = "Water deficiency";
        button1.innerText = "Start watering";
        button1.style.backgroundColor = '#33bf26';
        isPressed1 = 1;
    } else {
        potatoesText.innerText = "Watering...";
        button1.innerText = "Stop watering";
        button1.style.backgroundColor = '#e7271c';
        isPressed1 = 0;
    }
})

const button2 = document.getElementById("cabbages-button");
const cabbageText = document.getElementById("cabbages");
let isPressed2 = 0;

button2.addEventListener("click", () => {
    if (isPressed2 === 0) {
        cabbageText.innerText = "Water deficiency";
        button2.innerText = "Start watering";
        button2.style.backgroundColor = '#33bf26';
        isPressed2 = 1;
    } else {
        cabbageText.innerText = "Watering...";
        button2.innerText = "Stop watering";
        button2.style.backgroundColor = '#e7271c';
        isPressed2 = 0;
    }
})

const button3 = document.getElementById("peppers-button");
const pepperText = document.getElementById("peppers");
let isPressed3 = 1;

button3.addEventListener("click", () => {
    if (isPressed3 === 0) {
        pepperText.innerText = "Water deficiency";
        button3.innerText = "Start watering";
        button3.style.backgroundColor = '#33bf26';
        isPressed3 = 1;
    } else {
        pepperText.innerText = "Watering...";
        button3.innerText = "Stop watering";
        button3.style.backgroundColor = '#e7271c';
        isPressed3 = 0;
    }
})


const profile = document.getElementById("profile-sidenav");
const profileIcon = document.getElementById("profile-icon");
let isOpen = 0;

profileIcon.addEventListener("click", () => {
    if (isOpen === 0) {
        profile.style.width = "250px";
        isOpen = 1;
    } else {
        profile.style.width = "0";
        isOpen = 0;
    }
})