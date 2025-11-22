// === 1 ===
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener("input", function () {
  const value = slider.value;
  image.style.width = value * 3 + "px";
});


// === 2 ===
const box = document.getElementById("box");

// Функція, яка переміщує квадрат
function moveBox(event) {
  box.style.left = event.pageX + "px";
  box.style.top = event.pageY + "px";
}

// Загортаємо в debounce на 100 мс
const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMove);
