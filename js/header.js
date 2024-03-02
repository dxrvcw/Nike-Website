let redButton = document.querySelector(".color-picker-red");
let yellowButton = document.querySelector(".color-picker-yellow");
let blueButton = document.querySelector(".color-picker-blue");
let selected = redButton;
let imageContainer = document.querySelector(".sneakers-container");
let imageSneaker = document.querySelector(".sneakers-image");

let sneakersImages = {
  red: "img/header/sneaker-red.png",
  yellow: "img/header/sneaker-yellow.png",
  blue: "img/header/sneaker-blue.png",
};

selected.style.opacity = 1;

redButton.addEventListener("click", () => {
  if (selected !== redButton) {
    selected.style.opacity = 0.2;
    selected = redButton;
    selected.style.opacity = 1;
    imageContainer.style.left = 2500 + "px";
    setTimeout(() => {
      imageContainer.innerHTML = `<img
      class="sneakers-image red-shadow"
      src="${sneakersImages.red}"
      alt="Sneaker Red"
    />`;
    }, 300);
    setTimeout(() => {
      imageContainer.style.left = 500 + "px";
    }, 300);
  }
});

yellowButton.addEventListener("click", () => {
  if (selected !== yellowButton) {
    selected.style.opacity = 0.2;
    selected = yellowButton;
    selected.style.opacity = 1;
    imageContainer.style.left = 2500 + "px";
    setTimeout(() => {
      imageContainer.innerHTML = `<img
      class="sneakers-image yellow-shadow"
      src="${sneakersImages.yellow}"
      alt="Sneaker Yellow"
    />`;
    }, 300);

    setTimeout(() => {
      imageContainer.style.left = 500 + "px";
    }, 300);
  }
});

blueButton.addEventListener("click", () => {
  if (selected !== blueButton) {
    selected.style.opacity = 0.2;
    selected = blueButton;
    selected.style.opacity = 1;
    imageContainer.style.left = 2500 + "px";
    setTimeout(() => {
      imageContainer.innerHTML = `<img
      class="sneakers-image blue-shadow"
      src="${sneakersImages.blue}"
      alt="Sneaker Blue"
    />`;
    }, 300);
    setTimeout(() => {
      imageContainer.style.left = 500 + "px";
    }, 300);
  }
});
