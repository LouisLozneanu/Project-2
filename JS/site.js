const header = document.querySelector("header");
const images = [
    "Media/Header1.jpg",
    "Media/Header2.jpg",
    "Media/Header3.jpg"
];

let currentImageIndex = 0;

document.getElementById("change-image-btn").addEventListener("click", function() {

  header.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  header.style.backgroundSize = "cover";
  header.style.backgroundPosition = "center";
  header.style.backgroundRepeat = "no-repeat";
  header.style.height = "3rem";

  currentImageIndex = (currentImageIndex + 1) % images.length;
});