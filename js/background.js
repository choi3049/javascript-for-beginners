const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const container = document.querySelector(".bgimge");

bgImage.src = `img/${chosenImage}`;

container.appendChild(bgImage);
